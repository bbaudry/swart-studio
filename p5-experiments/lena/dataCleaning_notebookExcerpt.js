/*
    title: Nettoyage des données du MPP
    author: Lena MK
    date: Hiver 2026
    description: Script pour renommer et réorganiser les données de l'API du MPP.
    liens:
        - cleanData est une cellule du notebook suivant: https://observablehq.com/@bayt-wa-balad/data-exploration#cleanData
        - data : https://api.catalogit.app/api/public/accounts/8729/entries
*/

cleanData = {
  var resultat = []

  data.forEach(d => {
    var media = null
    
    if (d.media){
      media = {
        public: d.media[0].derivatives.public.path,
        thumbnail: d.media[0].derivatives.public_thumbnail.path,
        highres:d.media[0].derivatives.public_highres.path
      }
    }
   
    var name = d.properties.hasName ? d.properties.hasName.value_text : null
    name = name.replace('\"','').replace('\"','')

    var catNb = d.properties.hasCatalogNumber ? d.properties.hasCatalogNumber.value_text : null
    var description = d.properties.hasDescription ? d.properties.hasDescription.value_text : null
    var collection = d.properties.hasCollection ? d.properties.hasCollection.value_reference.reference_value : null
    var folders = d.folders.map(f => f.name)

    var tag 
    if (d.properties.hasTag && d.properties.hasTag.value_reference.length) //if multiple tags
        tag = d.properties.hasTag.value_reference.map(d => d.reference_value)
    else if (d.properties.hasTag && d.properties.hasTag.value_reference.reference_value) // if single tag
        tag = new Array(d.properties.hasTag.value_reference.reference_value)
    else
      tag = null  
    
    var medium
    if (d.properties.hasArtProperties && d.properties.hasArtProperties.value.hasMedium && d.properties.hasArtProperties.value.hasMedium.value_reference.length ) // if multiple mediums
        medium = d.properties.hasArtProperties.value.hasMedium.value_reference.map(d => d.reference_value)
    else if (d.properties.hasArtProperties && d.properties.hasArtProperties.value.hasMedium && d.properties.hasArtProperties.value.hasMedium.value_reference.reference_value) // if single medium
        medium = new Array(d.properties.hasArtProperties.value.hasMedium.value_reference.reference_value)
    else
      medium = null
    
    var info = null   
    if (d.properties.hasCreateOrManufactureInfo)
       info = d.properties.hasCreateOrManufactureInfo.value
    
    var maker = null
    if (info && info.hasMakerRelation && info.hasMakerRelation.value)
       maker = info.hasMakerRelation.value.hasMaker.value_reference.reference_value

    var date_from = null
    if (info && info.hasMadeDate && info.hasMadeDate.value_fuzzydaterange.fuzzydate_from){
      date_from = info.hasMadeDate.value_fuzzydaterange.fuzzydate_from.fuzzydate_value
    }
    
    var date_to = null
    if (info && info.hasMadeDate && info.hasMadeDate.value_fuzzydaterange.fuzzydate_to){
      date_to = info.hasMadeDate.value_fuzzydaterange.fuzzydate_to.fuzzydate_value
    }

    var time_period = null
    if (info && info.hasTimePeriod && info.hasTimePeriod.value_reference){
      time_period = info.hasTimePeriod.value_reference.reference_value
    }

    var make_info = null
    if (info && info.hasNotes && info.hasNotes){
      time_period = info.hasNotes.value_text
    }
    
    var place_made = null
    if (info && info.hasMadePlace){
      place_made = []
      //go through the list of descriptions/labels of the place where the object was made
      if (info.hasMadePlace.value_hreference_list.length){
        for (var i = 0; i < info.hasMadePlace.value_hreference_list.length; i++){
          if (info.hasMadePlace.value_hreference_list[i].value_reference.length){
            // if there are several names for the place type
            for (var j = 0; j < info.hasMadePlace.value_hreference_list[i].value_reference.length; j++){
              place_made.push(getPlaceDetails(info.hasMadePlace.value_hreference_list[i].value_reference[j], info.hasMadePlace.value_hreference_list[i].label))
            }
          }
          else
            place_made.push(getPlaceDetails(info.hasMadePlace.value_hreference_list[i].value_reference, info.hasMadePlace.value_hreference_list[i].label))
        }
      }
      else //if value_hreference_list isn't a list, get the value
        place_made.push(getPlaceDetails(info.hasMadePlace.value_hreference_list.value_reference, info.hasMadePlace.value_hreference_list.label))

      //adding lat-long for place_made array
      place_made.forEach(p => {
        var temp = cleanPlaces.find(d => d.CIT == p.CIT)
        p.lat = temp.lat
        p.lon = temp.lon
      })      
    }

    var related_places = null
    if  (d.properties.hasRelationship && d.properties.hasRelationship.value.hasRelatedPlace){
      related_places = []
      //go through the list of related places
      if (d.properties.hasRelationship.value.hasRelatedPlace.value.length){    
        for (var i = 0; i < d.properties.hasRelationship.value.hasRelatedPlace.value.length; i++){
            related_places.push(getRelatedPlaceDetails(d.properties.hasRelationship.value.hasRelatedPlace.value[i]))   
        }
      }
      else { //check out the only related place
        related_places.push(getRelatedPlaceDetails(d.properties.hasRelationship.value.hasRelatedPlace.value))
      }

      //adding lat long
      related_places.forEach(rel => {
        rel.place.forEach(p => {
          var temp = cleanPlaces.find(d => d.CIT == p.CIT)
          p.lat = temp.lat
          p.lon = temp.lon
        })
      })
      
    }

    var creation_notes = null
    if (info && info.hasNotes)
      creation_notes = info.hasNotes.value_text

    var dimensions = null
    if (d.properties.hasDimensions){
      dimensions = {
        height: d.properties.hasDimensions.value.hasHeight? d.properties.hasDimensions.value.hasHeight.value_length.length_value : null,
        width: d.properties.hasDimensions.value.hasWidth? d.properties.hasDimensions.value.hasWidth.value_length.length_value : null,
        depth: d.properties.hasDimensions.value.hasDepth? d.properties.hasDimensions.value.hasDepth.value_length.length_value : null,
        diameter: d.properties.hasDimensions.value.hasDiameter? d.properties.hasDimensions.value.hasDiameter.value_length.length_value : null,
        circumference: d.properties.hasDimensions.value.hasCircumference? d.properties.hasDimensions.value.hasCircumference.value_length.length_value : null,
        description: d.properties.hasDimensions.value.hasDescription? d.properties.hasDimensions.value.hasDescription.value_text : null,
        notes: d.properties.hasDimensions.value.hasNotes? d.properties.hasDimensions.value.hasNotes.value_text : null,
      }
    }

    var bwb_note = null
    if (d.properties.hasNoteProperties){
      if (d.properties.hasNoteProperties.value &&  d.properties.hasNoteProperties.value.hasNoteType && d.properties.hasNoteProperties.value.hasNoteType.value_reference.reference_value == "BWB Export Variable")
        bwb_note = d.properties.hasNoteProperties.value.hasNotes.value_text.replace("Essay:", "")
    }

    var object_details = null
    //for maps
    if (d.properties.hasPublicationProps && d.properties.hasPublicationProps.label == "Map Details"){
      object_details = {type: "Map Details"}
      if (d.properties.hasPublicationProps.value.hasAuthor){
        object_details.author = d.properties.hasPublicationProps.value.hasAuthor.value_reference.reference_value
        maker = d.properties.hasPublicationProps.value.hasAuthor.value_reference.reference_value
      }
      if (d.properties.hasPublicationProps.value.hasPublishDate){
        object_details.date_published = d.properties.hasPublicationProps.value.hasPublishDate.value_fuzzydaterange.fuzzydate_from.fuzzydate_value
        date_from = d.properties.hasPublicationProps.value.hasPublishDate.value_fuzzydaterange.fuzzydate_from.fuzzydate_value
      }
      if (d.properties.hasPublicationProps.value.hasPublishPlace){
        var places_published = []
        d.properties.hasPublicationProps.value.hasPublishPlace.value_hreference_list.forEach(p => places_published.push(getPlaceDetails(p.value_reference, p.label)))
        object_details.place_published = places_published
      }         
    }
    //for photographs
    if (d.properties.hasPhotographProperties && d.properties.hasPhotographProperties.label == "Photograph Details"){
      object_details = {type: "Photograph Details"}
      if (d.properties.hasPhotographProperties.value.hasPhotographType){
        object_details.photo_type = d.properties.hasPhotographProperties.value.hasPhotographType.value_reference.reference_value
        medium = d.properties.hasPhotographProperties.value.hasPhotographType.value_reference.reference_value
      }
      /* only one instance and not very meaningful
      if (d.properties.hasPhotographProperties.value.hasSubjectAgent){
        object_details.subject = d.properties.hasPhotographProperties.value.hasSubjectAgent.value_reference.reference_value
      } 
      */
      if (d.properties.hasPhotographProperties.value.hasSubjectPlace){
        var place_subject = []
        d.properties.hasPhotographProperties.value.hasSubjectPlace.value_hreference_list.forEach(p => place_subject.push(getPlaceDetails(p.value_reference, p.label)))
        object_details.place_subject = place_subject
      } 
    }

    //final format
    resultat.push({
      name: name,
      maker: maker,
      date_from: date_from,
      date_to: date_to,
      time_period: time_period,
      place_made: place_made,
      place_related: related_places,
      bwb_note: bwb_note,
      make_info: make_info,
      medium: medium,
      object_details: object_details,
      dimensions: dimensions,
      collection: collection,
      catNb: catNb,
      tag: tag,
      folders: folders,
      description: description,
      creation_notes: creation_notes,
      img: media,
      classification: d.classification,
      slug: d.slug,
      info: info
    })
  })

  return resultat  
}
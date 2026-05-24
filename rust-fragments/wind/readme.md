# lineage of changes

This nannou sketch reads data from ```assets/agentlogs.csv''', which are metadata for consecutive commits on a project, e.g., number of additions, deletions or the hash of the commit.

The current sketch shows the number of additions. It draws a cloud of particles that has as many particles as addtions made by the commit. It also draws a line pointing to a random particle and writes the hash of commit on the line.
use std::error::Error;
use std::sync::Arc;

use headless_chrome::Browser;
use headless_chrome::protocol::cdp::Page;

pub struct NetworkInterceptor;

impl headless_chrome::browser::tab::RequestInterceptor for NetworkInterceptor
{
    fn intercept(
        &self,
        transport: std::sync::Arc<headless_chrome::browser::transport::Transport>,
        session_id: headless_chrome::browser::transport::SessionId,
        event: headless_chrome::protocol::cdp::Fetch::events::RequestPausedEvent,
    ) -> headless_chrome::browser::tab::RequestPausedDecision {
        
        println!("{:?}", event);

        return headless_chrome::browser::tab::RequestPausedDecision::Continue(None)
    }
}

fn browse_wikipedia() -> Result<(), Box<dyn Error>> {
    let mut browser = Browser::new(
        headless_chrome::LaunchOptions { 
            headless: false, 
            ..Default::default()}
    )?;
    

    let tab = browser.new_tab()?;

    /// Navigate to a site
    tab.navigate_to("https://www.kth.se")?;
    tab.wait_until_navigated()?;

    tab.enable_request_interception(Arc::new(NetworkInterceptor)).unwrap();


    
    std::thread::sleep(std::time::Duration::from_secs(300));
    /*
    /// Wait for network/javascript/dom to make the search-box available
    /// and click it.
    tab.wait_for_element("input#searchInput")?.click()?;

    /// Type in a query and press `Enter`
    tab.type_str("WebKit")?.press_key("Enter")?;

    /// We should end up on the WebKit-page once navigated
    let elem = tab.wait_for_element("#firstHeading")?;
    assert!(tab.get_url().ends_with("WebKit"));

    /// Take a screenshot of the entire browser window
    let _jpeg_data = tab.capture_screenshot(
        Page::CaptureScreenshotFormatOption::Jpeg,
        None,
        None,
        true)?;

    /// Take a screenshot of just the WebKit-Infobox
    let _png_data = tab
        .wait_for_element("#mw-content-text > div > table.infobox.vevent")?
        .capture_screenshot(Page::CaptureScreenshotFormatOption::Png)?;

    // Run JavaScript in the page
    let remote_object = elem.call_js_fn(r#"
        function getIdTwice () {
            // `this` is always the element that you called `call_js_fn` on
            const id = this.id;
            return id + id;
        }
    "#, vec![], false)?;
    match remote_object.value {
        Some(returned_string) => {
            dbg!(&returned_string);
            assert_eq!(returned_string, "firstHeadingfirstHeading".to_string());
        }
        _ => unreachable!()
    };*/

    Ok(())
}

pub fn main() {
    browse_wikipedia().unwrap();
}
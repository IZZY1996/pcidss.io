//
// The DOMContentLoaded event fires when the initial HTML document has been 
// completely loaded and parsed, without waiting for stylesheets, images, and subframes 
// to finish loading.
//
document.addEventListener('DOMContentLoaded', function () {
    const mainRequirementsPanel = document.getElementById('main-requirements-panel');
    const subRequirementsPanel = document.getElementById('sub-requirements-panel');
    const checklistPanel = document.getElementById('checklist-panel');
    const toggleMainButton = document.getElementById('toggle-main-reqs');
    const toggleSubReqsButton = document.getElementById('toggle-sub-reqs');
    const innerPanel = document.getElementById('inner-panel');


    function filterSubRequirements(mainReqNumber) {
        const allSubRequirements = subRequirementsPanel.querySelectorAll('.sub-requirement');
        allSubRequirements.forEach(subReq => {
            if (subReq.getAttribute('data-main-requirement').startsWith(mainReqNumber)) {
                subReq.style.display = 'block';
            } else {
                subReq.style.display = 'none';
            }
        });
    }

    function filterChecklistItems(subReqNumber) {
        const allChecklistItems = checklistPanel.querySelectorAll('.checklist-item');
        allChecklistItems.forEach(item => {
            if (item.getAttribute('data-sub-requirement').startsWith(subReqNumber)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function shrinkMainRequirements() {
        mainRequirementsPanel.classList.add('shrunken');
        mainRequirements.forEach(requirement => {
            const requirementNumber = requirement.getAttribute('data-requirement');
            requirement.innerText = requirementNumber;
        });
        toggleMainButton.innerText = '<';
    }

    function expandMainRequirements() {
        mainRequirementsPanel.classList.remove('shrunken');
        toggleMainButton.innerText = '>';
        mainRequirements.forEach(requirement => {
            const requirementNumber = requirement.getAttribute('data-requirement');
            switch (requirementNumber) {
                case "01":
                    requirement.innerText = "1. Install and Maintain Network Security Controls.";
                    break;
                case "2":
                    requirement.innerText = "2. Apply Secure Configurations to All System Components.";
                    break;
                case "3":
                    requirement.innerText = "3. Protect Stored Account Data.";
                    break;
                case "4":
                    requirement.innerText = "4. Protect Cardholder Data with Strong Cryptography During Transmission Over Open, Public Networks.";
                    break;
                case "5":
                    requirement.innerText = "5. Protect All Systems and Networks from Malicious Software.";
                    break;
                case "6":
                    requirement.innerText = "6. Develop and Maintain Secure Systems and Software.";
                    break;
                case "7":
                    requirement.innerText = "7. Restrict Access to System Components and Cardholder Data by Business Need to Know.";
                    break;
                case "8":
                    requirement.innerText = "8. Identify Users and Authenticate Access to System Components.";
                    break;
                case "9":
                    requirement.innerText = "9. Restrict Physical Access to Cardholder Data.";
                    break;
                case "10":
                    requirement.innerText = "10. Log and Monitor All Access to System Components and Cardholder Data.";
                    break;
                case "11":
                    requirement.innerText = "11. Test Security of Systems and Networks Regularly.";
                    break;
                case "12":
                    requirement.innerText = "12. Support Information Security with Organizational Policies and Programs.";
                    break;
            }
        });
    }

    // Attach click event to each main requirement
    const mainRequirements = mainRequirementsPanel.querySelectorAll('.requirement');
    mainRequirements.forEach(requirement => {
        requirement.addEventListener('click', function () {
            mainRequirements.forEach(req => req.classList.remove('selected'));
            this.classList.add('selected');

            const mainReqNumber = this.getAttribute('data-requirement');
            let mainReqText = this.innerText.trim();

            // If the panel is shrunken, the title is just the number. 
            // In this case, we'll use the switch statement to get the full text.
            if (mainRequirementsPanel.classList.contains('shrunken')) {
                switch (mainReqNumber) {
                    case "01":
                        mainReqText = "1. Install and Maintain Network Security Controls.";
                        break;
                    case "2":
                        mainReqText = "2. Apply Secure Configurations to All System Components.";
                        break;
                    case "3":
                        mainReqText = "3. Protect Stored Account Data.";
                        break;
                    case "4":
                        mainReqText = "4. Protect Cardholder Data with Strong Cryptography During Transmission Over Open, Public Networks.";
                        break;
                    case "5":
                        mainReqText = "5. Protect All Systems and Networks from Malicious Software.";
                        break;
                    case "6":
                        mainReqText = "6. Develop and Maintain Secure Systems and Software.";
                        break;
                    case "7":
                        mainReqText = "7. Restrict Access to System Components and Cardholder Data by Business Need to Know.";
                        break;
                    case "8":
                        mainReqText = "8. Identify Users and Authenticate Access to System Components.";
                        break;
                    case "9":
                        mainReqText = "9. Restrict Physical Access to Cardholder Data.";
                        break;
                    case "10":
                        mainReqText = "10. Log and Monitor All Access to System Components and Cardholder Data.";
                        break;
                    case "11":
                        mainReqText = "11. Test Security of Systems and Networks Regularly.";
                        break;
                    case "12":
                        mainReqText = "12. Support Information Security with Organizational Policies and Programs.";
                        break;
                }
            }
            // Update the h2 title of the sub-requirements-panel
            document.querySelector('#sub-requirements-panel h2').textContent = mainReqText;

            filterSubRequirements(mainReqNumber);
            shrinkMainRequirements();
        });
    });

    // Attach click event to each sub-requirement
    const subRequirements = subRequirementsPanel.querySelectorAll('.sub-requirement');
    subRequirements.forEach(subReq => {
        subReq.addEventListener('click', function () {
            subRequirements.forEach(req => req.classList.remove('selected'));
            this.classList.add('selected');

            const subReqNumber = this.getAttribute('data-sub-requirement');

            // Extract the title from the clicked sub-requirement and update the h2 in the checklist panel
            const title = this.getAttribute('data-title');
            if (title) {
                document.querySelector('#checklist-panel h2').textContent = title;
            }

            filterChecklistItems(subReqNumber);
            shrinkSubRequirements();
        });
    })

    toggleMainButton.addEventListener('click', function () {
        if (mainRequirementsPanel.classList.contains('shrunken')) {
            expandMainRequirements();
        } else {
            shrinkMainRequirements();
        }
    });

    function expandSubRequirements() {
        subRequirementsPanel.classList.remove('shrunken');
        toggleSubReqsButton.innerText = '>';
        subRequirements.forEach(subReq => {
            const subReqNumber = subReq.getAttribute('data-sub-requirement');
            switch (subReqNumber) {
                case "1.1":
                    subReq.innerText = "1.1 Processes and mechanisms for installing and maintaining network security controls are defined and understood.";
                    break;
                case "1.2":
                    subReq.innerText = "1.2 Network security controls (NSCs) are configured and maintained.";
                    break;
                case "1.3":
                    subReq.innerText = "1.3 Network access to and from the cardholder data environment is restricted.";
                    break;
                case "1.4":
                    subReq.innerText = "1.4 Network connections between trusted and untrusted networks are controlled.";
                    break;
                case "1.5":
                    subReq.innerText = "1.5 Risks to the CDE from computing devices that are able to connect to both untrusted networks and the CDE are mitigated.";
                    break;
                case "2.1":
                    subReq.innerText = "2.1 Processes and mechanisms for applying secure configurations to all system components are defined and understood.";
                    break;
                case "2.2":
                    subReq.innerText = "2.2 System components are configured and managed securely.";
                    break;
                case "2.3":
                    subReq.innerText = "2.3 Wireless environments are configured and managed securely.";
                    break;
                case "3.1":
                    subReq.innerText = "3.1 Processes and mechanisms for protecting stored account data are defined and understood.";
                    break;
                case "3.2":
                    subReq.innerText = "3.2 Storage of account data is kept to a minimum.";
                    break;
                case "3.3":
                    subReq.innerText = "3.3 Sensitive authentication data (SAD) is not stored after authorization.";
                    break;
                case "3.4":
                    subReq.innerText = "3.4 Access to displays of full PAN and ability to copy cardholder data are restricted.";
                    break;
                case "3.5":
                    subReq.innerText = "3.5 Primary account number (PAN) is secured wherever it is stored.";
                    break;
                case "3.6":
                    subReq.innerText = "3.6 Cryptographic keys used to protect stored account data are secured.";
                    break;
                case "3.7":
                    subReq.innerText = "3.7 Where cryptography is used to protect stored account data, key management processes and procedures covering all aspects of the key lifecycle are defined and implemented.";
                    break;
                case "4.1":
                    subReq.innerText = "4.1 Processes and mechanisms for protecting cardholder data with strong cryptography during transmission over open, public networks are defined and documented.";
                    break;
                case "4.2":
                    subReq.innerText = "4.2 PAN is protected with strong cryptography during transmission";
                    break;
                case "5.1":
                    subReq.innerText = "5.1 Processes and mechanisms for protecting all systems and networks from malicious software are defined and understood.";
                    break;
                case "5.2":
                    subReq.innerText = "5.2 Malicious software (malware) is prevented, or detected and addressed.";
                    break;
                case "5.3":
                    subReq.innerText = "5.3 Anti-malware mechanisms and processes are active, maintained, and monitored.";
                    break;
                case "5.4":
                    subReq.innerText = "5.4 Anti-phishing mechanisms protect users against phishing attacks.";
                    break;
                case "6.1":
                    subReq.innerText = "6.1 Processes and mechanisms for developing and maintaining secure systems and software are defined and understood.";
                    break;
                case "6.2":
                    subReq.innerText = "6.2 Bespoke and custom software are developed securely.";
                    break;
                case "6.3":
                    subReq.innerText = "6.3 Security vulnerabilities are identified and addressed.";
                    break;
                case "6.4":
                    subReq.innerText = "6.4 Public-facing web applications are protected against attacks.";
                    break;
                case "6.5":
                    subReq.innerText = "6.5 Changes to all system components are managed securely.";
                    break;
                case "7.1":
                    subReq.innerText = "7.1 Processes and mechanisms for restricting access to system components and cardholder data by business need to know are defined and understood.";
                    break;
                case "7.2":
                    subReq.innerText = "7.2 Access to system components and data is appropriately defined and assigned.";
                    break;
                case "7.3":
                    subReq.innerText = "7.3 Access to system components and data is managed via an access control system(s).";
                    break;
                case "8.1":
                    subReq.innerText = "8.1 Processes and mechanisms for identifying users and authenticating access to system components are defined and understood.";
                    break;
                case "8.2":
                    subReq.innerText = "8.2 User identification and related accounts for users and administrators are strictly managed throughout an account’s lifecycle.";
                    break;
                case "8.3":
                    subReq.innerText = "8.3 Strong authentication for users and administrators is established and managed.";
                    break;
                case "8.4":
                    subReq.innerText = "8.4 Multi-factor authentication (MFA) is implemented to secure access into the CDE";
                    break;
                case "8.5":
                    subReq.innerText = "8.5 Multi-factor authentication (MFA) systems are configured to prevent misuse.";
                    break;
                case "8.6":
                    subReq.innerText = "8.6 Use of application and system accounts and associated authentication factors is strictly managed.";
                    break;
                case "9.1":
                    subReq.innerText = "9.1 Processes and mechanisms for restricting physical access to cardholder data are defined and understood.";
                    break;
                case "9.2":
                    subReq.innerText = "9.2 Physical access controls manage entry into facilities and systems containing cardholder data.";
                    break;
                case "9.3":
                    subReq.innerText = "9.3 Physical access for personnel and visitors is authorized and managed.";
                    break;
                case "9.4":
                    subReq.innerText = "9.4 Media with cardholder data is securely stored, accessed, distributed, and destroyed.";
                    break;
                case "9.5":
                    subReq.innerText = "9.5 Point of interaction (POI) devices are protected from tampering and unauthorized substitution.";
                    break;
                case "10.1":
                    subReq.innerText = "10.1 Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and documented.";
                    break;
                case "10.2":
                    subReq.innerText = "10.2 Audit logs are implemented to support the detection of anomalies and suspicious activity, and the forensic analysis of events.";
                    break;
                case "10.3":
                    subReq.innerText = "10.3 Audit logs are protected from destruction and unauthorized modifications.";
                    break;
                case "10.4":
                    subReq.innerText = "10.4 Audit logs are reviewed to identify anomalies or suspicious activity.";
                    break;
                case "10.5":
                    subReq.innerText = "10.5 Audit log history is retained and available for analysis.";
                    break;
                case "10.6":
                    subReq.innerText = "10.6 Time-synchronization mechanisms support consistent time settings across all systems.";
                    break;
                case "10.7":
                    subReq.innerText = "10.7 Failures of critical security control systems are detected, reported, and responded to promptly.";
                    break;
                case "11.1":
                    subReq.innerText = "11.1 Processes and mechanisms for regularly testing security of systems and networks are defined and understood.";
                    break;
                case "11.2":
                    subReq.innerText = "11.2 Wireless access points are identified and monitored, and unauthorized wireless access points are addressed.";
                    break;
                case "11.3":
                    subReq.innerText = "11.3 External and internal vulnerabilities are regularly identified, prioritized, and addressed.";
                    break;
                case "11.4":
                    subReq.innerText = "11.4 External and internal penetration testing is regularly performed, and exploitable vulnerabilities and security weaknesses are corrected.";
                    break;
                case "11.5":
                    subReq.innerText = "11.5 Network intrusions and unexpected file changes are detected and responded to.";
                    break;
                case "11.6":
                    subReq.innerText = "11.6 Unauthorized changes on payment pages are detected and responded to.";
                    break;
                case "12.1":
                    subReq.innerText = "12.1 A comprehensive information security policy that governs and provides direction for protection of the entity’s information assets is known and current.";
                    break;
                case "12.2":
                    subReq.innerText = "12.2 Acceptable use policies for end-user technologies are defined and implemented.";
                    break;
                case "12.3":
                    subReq.innerText = "12.3 Risks to the cardholder data environment are formally identified, evaluated, and managed.";
                    break;
                case "12.4":
                    subReq.innerText = "12.4 PCI DSS compliance is managed.";
                    break;
                case "12.5":
                    subReq.innerText = "12.5 PCI DSS scope is documented and validated.";
                    break;
                case "12.6":
                    subReq.innerText = "12.6 Security awareness education is an ongoing activity.";
                    break;
                case "12.7":
                    subReq.innerText = "12.7 Personnel are screened to reduce risks from insider threats.";
                    break;
                case "12.8":
                    subReq.innerText = "12.8 Risk to information assets associated with third-party service provider (TPSP) relationships is managed.";
                    break;
                case "12.9":
                    subReq.innerText = "12.9 Third-party service providers (TPSPs) support their customers’ PCI DSS compliance.";
                    break;
                case "12.10":
                    subReq.innerText = "12.10 Suspected and confirmed security incidents that could impact the CDE are responded to immediately.";
                    break;
            }
        });
    }

    function shrinkSubRequirements() {
        subRequirementsPanel.classList.add('shrunken');
        toggleSubReqsButton.innerText = '<';
        subRequirements.forEach(subReq => {
            const subReqNumber = subReq.getAttribute('data-sub-requirement');
            subReq.innerText = subReqNumber;
        });
    }


    //
    // This segment of the code is focused on enabling the interactive toggling of 
    // the 'subRequirementsPanel', allowing users to expand or shrink it with a single 
    // click. It enhances the user experience by providing a clean and concise view, 
    // especially when dealing with a large number of sub-requirements.
    //
    // Here's a breakdown of how this works:
    //
    // 1. The code starts by selecting the button or element with the ID 'toggle-sub-reqs'. 
    //    This element acts as the trigger for the toggling action.
    //
    // 2. A 'click' event listener is then attached to this button. This means that 
    //    every time a user clicks on this button, the code within the event listener 
    //    will be executed.
    //
    // 3. Within the event listener, there's a conditional check using an 'if' statement. 
    //    The code checks if the 'subRequirementsPanel' currently has a class named 'shrunken'.
    //
    // 4. If the 'subRequirementsPanel' is in a 'shrunken' state (i.e., it has the 
    //    'shrunken' class), the `expandSubRequirements` function is called to expand 
    //    the panel. This function might be responsible for displaying the full details 
    //    of the sub-requirements.
    //
    // 5. Conversely, if the 'subRequirementsPanel' is not in a 'shrunken' state (i.e., 
    //    it doesn't have the 'shrunken' class), the `shrinkSubRequirements` function 
    //    is called to shrink the panel. This function likely reduces the displayed details 
    //    or hides certain sections of the sub-requirements for a more compact view.
    //
    // In summary, this code block equips the 'toggle-sub-reqs' button with the ability 
    // to switch the view mode of the 'subRequirementsPanel' between expanded and shrunken 
    // states, offering users flexibility in how they interact with the content.
    //
    document.getElementById('toggle-sub-reqs').addEventListener('click', function () {
        if (subRequirementsPanel.classList.contains('shrunken')) {
            expandSubRequirements();
        } else {
            shrinkSubRequirements();
        }
    });


    //
    // This segment of the code is designed to add interactive functionality to 
    // each checklist item in the interface. It ensures that when a user clicks 
    // on a particular checklist item, the associated content for that item gets 
    // displayed, providing a responsive and interactive user experience.
    //
    // Let's break it down step by step:
    //
    // 1. The code begins by selecting all elements with the class 'checklist-item'. 
    //    These elements represent individual checklist items in the interface.
    //
    // 2. For each of these checklist items, the code attaches a 'click' event listener. 
    //    This means that the code will be able to detect and respond whenever a user 
    //    clicks on any of these items.
    //
    // 3. Within the event listener, the specific identifier (`subReq`) for the clicked 
    //    checklist item is retrieved. This identifier is stored as a data attribute 
    //    named 'data-sub-requirement' on the element and serves as a unique reference 
    //    to differentiate each checklist item.
    //
    // 4. Once the identifier is retrieved, the `loadContentForChecklistItem` function 
    //    is called with this identifier. As previously explained, this function is 
    //    responsible for displaying the content associated with the clicked checklist 
    //    item and managing its checkbox's state.
    //
    // In essence, this code block makes the checklist items interactive, allowing 
    // users to click on them and view relevant content, thus enhancing the overall 
    // usability of the interface.
    //
    document.querySelectorAll('.checklist-item').forEach(item => {
        item.addEventListener('click', function () {
            const itemReq = this.getAttribute('data-item-requirement'); // Get the unique item requirement
            loadContentForChecklistItem(itemReq);
        });
    });


    //
    // The `loadContentForChecklistItem` function is designed to manage the display 
    // of content for a specific checklist item and to monitor user interactions 
    // with its associated checkbox. This function is crucial in ensuring that 
    // the content displayed is always in sync with the checklist item that a user 
    // has selected, and it also keeps track of the completion state of the checklist items.
    //
    // Let's delve into the specifics:
    //
    // 1. The function starts by hiding the content of all checklist items. This 
    //    ensures that any previously displayed content is hidden, giving way to 
    //    the new content that the user wants to see.
    //
    // 2. It then identifies the specific content associated with the clicked 
    //    checklist item (using its unique identifier `subReq`) and displays it.
    //
    // 3. Within this content, the function fetches the checkbox element, which 
    //    allows users to mark a checklist item as completed. 
    //
    // 4. The completion state of this checkbox is then set based on information 
    //    stored in the browser's local storage (`localStorage`). If the item is 
    //    stored as "completed" in `localStorage`, the checkbox will be checked; 
    //    otherwise, it will be unchecked.
    //
    // 5. An event listener is added to the checkbox to detect when its state changes 
    //    (i.e., when a user checks or unchecks it). Depending on the checkbox's 
    //    state, the function will either store the item's completion status in 
    //    `localStorage` or remove it.
    //
    // 6. After updating the `localStorage`, the function calls `updateTabColor` 
    //    to adjust the tab's color based on its completion status.
    //
    // In summary, this function ensures that the correct content is displayed 
    // when a checklist item is selected, and it keeps track of the completion 
    // status of each item, providing users with a visual cue (via tab color) 
    // and storing this status for future reference.
    //
    function loadContentForChecklistItem(itemReq) {
        console.log("Function loadContentForChecklistItem called with:", itemReq);  // Debugging line

        // Hide all checklist contents
        const allContents = document.querySelectorAll('.checklist-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        // Show content corresponding to clicked checklist item
        const contentToShow = document.getElementById(`content-${itemReq}`);
        if (contentToShow) {
            contentToShow.style.display = 'block';
        }

        // If there's a checkbox within the content, handle its state and events
        const checkbox = contentToShow && contentToShow.querySelector(`input[type="checkbox"]`);
        if (checkbox) {
            checkbox.checked = localStorage.getItem(itemReq) === "completed"; // Set the checkbox state based on stored progress

            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    localStorage.setItem(itemReq, "completed");
                } else {
                    localStorage.removeItem(itemReq);
                }
                updateTabColor(itemReq);
            });
        }

        // When loading content for a specific checklist item, only update its tab color
        updateTabColor(itemReq);
    }


    //
    // The function `updateTabColor` is designed to provide visual feedback to the user 
    // regarding the progress of a specific checklist item. In web applications, such 
    // visual feedback is essential to enhance user experience, letting users know the 
    // current state or progress of tasks they're working on.
    //
    // Here's a step-by-step breakdown of what happens inside this function:
    //
    // 1. The function takes in a parameter `subReq`, which is the identifier for a 
    //    specific sub-requirement or checklist item. With this identifier, we can 
    //    determine which checklist tab we need to update.
    //
    // 2. Using the `document.querySelector` method and a template literal, we target 
    //    the specific tab associated with our `subReq` identifier. The `querySelector` 
    //    method returns the first DOM element that matches the provided selector. In 
    //    this case, our selector targets an element with the class 'checklist-item' 
    //    and a specific `data-sub-requirement` attribute value that matches our `subReq`.
    //
    // 3. We then check the state of this checklist item in the browser's `localStorage`. 
    //    The `localStorage` is a Web Storage API that allows us to store key-value pairs 
    //    in a web browser. It's useful for preserving application data without needing 
    //    to interact with a server. In our context, we use it to remember which checklist 
    //    items have been marked as "completed".
    //
    //    If our `subReq` identifier has a value of "completed" in `localStorage`, it 
    //    indicates that this specific checklist item has been marked as done by the user. 
    //    Therefore, we change the background color of the tab to green.
    //
    // 4. If the checklist item is not marked as "completed" in `localStorage`, we reset 
    //    the tab's background color to its default, effectively removing any specific 
    //    color that might have been set earlier.
    //
    function updateTabColor(itemReq) {
        const tab = document.querySelector(`.checklist-item[data-sub-requirement="${itemReq}"]`);
        if (tab) {  // Check if tab exists
            if (localStorage.getItem(itemReq) === "completed") {
                tab.style.backgroundColor = 'green';
            } else {
                tab.style.backgroundColor = ''; // Reset to default color
            }
        }
    }


    //
    // This piece of code is concerned with the initial presentation of the web page
    // when it first loads. In web applications, it's important to ensure that the 
    // state of the user interface matches any saved or stored data from previous 
    // interactions. This way, users are presented with a consistent view, 
    // reflecting their past actions.
    //
    // Here's a breakdown of what happens:
    //
    // 1. Upon the web page's initial load, we want to display the correct colors 
    //    for each checklist tab based on the user's previous interactions. This 
    //    visual feedback informs users about which checklist items they've already 
    //    marked as completed.
    //
    // 2. The `document.querySelectorAll('.checklist-item')` method retrieves all 
    //    the DOM elements with the class 'checklist-item'. These elements represent 
    //    the individual tabs for each checklist item on our web page.
    //
    // 3. The `forEach` method is then used to iterate over each of these checklist 
    //    tabs. For every tab, we perform the following steps:
    //    
    //    a. Retrieve the specific identifier (`subReq`) for the checklist item 
    //       using the `getAttribute` method. This identifier is stored as a 
    //       `data-sub-requirement` attribute in the tab's HTML element.
    //
    //    b. Call the previously defined `updateTabColor` function with the 
    //       `subReq` identifier. This function checks the `localStorage` to see 
    //       if the associated checklist item has been marked as "completed". 
    //       It then updates the tab's background color accordingly (green if 
    //       completed, default color otherwise).
    //
    // In summary, this code ensures that, upon the page's initial load, each 
    // checklist tab displays the correct color based on the user's saved progress.
    //
    //document.querySelectorAll('.checklist-item').forEach(item => {
    //    item.addEventListener('click', function () {
    //        const subReq = this.getAttribute('data-sub-requirement');
    //        loadContentForChecklistItem(subReq);
    //    });
    //});


    //
    // This piece of code is centered around enhancing user interactivity with 
    // the checklist tabs present on the web page. It ensures that when a user 
    // clicks on a particular checklist tab, the corresponding content for that 
    // tab becomes visible.
    //
    // Here's a detailed breakdown of what happens:
    //
    // 1. `document.querySelectorAll('.checklist-tab')` is a method that fetches 
    //    all the DOM elements with the class 'checklist-tab'. These elements 
    //    signify the individual tabs for each checklist item on our webpage.
    //
    // 2. The `forEach` method is then employed to iterate over each of these 
    //    checklist tabs. For every tab, the following steps are executed:
    //    
    //    a. An event listener is attached to the tab using the `addEventListener` 
    //       method. This ensures that a specific function is called whenever a 
    //       user clicks on the tab.
    //
    //    b. Inside the event listener function (i.e., the function that's invoked 
    //       upon a tab click), we first retrieve the unique identifier (`subReq`) 
    //       for the clicked checklist item using the `getAttribute` method. This 
    //       identifier is stored as a `data-sub-requirement` attribute in the tab's 
    //       HTML element.
    //
    //    c. We then call the `showContentForChecklistItem` function, providing 
    //       the `subReq` identifier as an argument. This function takes care of 
    //       displaying the content specific to the clicked checklist item while 
    //       hiding the content of all other checklist items.
    //
    // In essence, this code ensures that, whenever a user clicks on a checklist 
    // tab, the web page dynamically shows the associated content for that tab 
    // while keeping the content of other tabs hidden.
    //
    const checklistTabs = document.querySelectorAll('.checklist-tab');
    checklistTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const subReq = this.getAttribute('data-sub-requirement');
            showContentForChecklistItem(subReq);
        });
    });


    //
    // The function `showContentForChecklistItem` is designed to display specific content 
    // related to a checklist item when it's clicked on. In web development, especially 
    // with dynamic user interfaces, it's common to hide or show different sections of 
    // content based on user interactions. This function embodies this principle.
    //
    // Here's a step-by-step breakdown of what happens inside this function:
    //
    // 1. The function receives a parameter `subReq`, which is the identifier for a 
    //    specific sub-requirement or checklist item. Using this identifier, we can 
    //    determine which content to display to the user.
    //
    // 2. We first ensure that all other checklist contents are hidden. This is done to 
    //    provide a clean slate, ensuring that the user only sees the relevant content. 
    //    We use `document.querySelectorAll('.checklist-content')` to grab all elements 
    //    with the class 'checklist-content'. The method `querySelectorAll` returns a 
    //    NodeList, which is a collection of DOM elements. We then loop over this collection 
    //    using `forEach`, and for each content element, we set its `display` style to 'none', 
    //    effectively hiding it.
    //
    // 3. After hiding all the other content, we want to display the content specific 
    //    to the clicked checklist item. Using the `document.getElementById` method and 
    //    a template literal (`content-${subReq}`), we can directly target the specific 
    //    content associated with our `subReq` identifier. Once we have this content, 
    //    we change its `display` style to 'block', making it visible to the user.
    //
    // 4. Lastly, we call the `updateTabColor` function to visually indicate the progress 
    //    of this checklist item (e.g., whether it's completed or not). This helps provide 
    //    immediate feedback to the user and enhances the user experience.
    //
    function showContentForChecklistItem(subReq) {
        // Hide all checklist contents
        const allContents = document.querySelectorAll('.checklist-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        // Show content corresponding to clicked checklist item
        const contentToShow = document.getElementById(`content-${subReq}`);
        if (contentToShow) {
            contentToShow.style.display = 'block';
        }

        // Update tab color based on stored progress
        updateTabColor(subReq);
    }



    //
    //
    //
    const settingsIcon = document.getElementById('settingsIcon');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const settingsModal = document.getElementById('settingsModal');
    const serviceProviderSwitch = document.getElementById('serviceProviderSwitch');

    settingsIcon.addEventListener('click', () => {
        modalBackdrop.style.display = 'block';
        setTimeout(() => {
            modalBackdrop.style.opacity = '1';
        }, 50); // Delay to ensure that the backdrop is visible before starting the transition

        settingsModal.style.display = 'block';
        setTimeout(() => {
            settingsModal.style.opacity = '1';
            settingsModal.style.transform = 'translate(-50%, -50%)'; // Centered position
        }, 50); // Delay to ensure that the modal is visible before starting the transition
    });

    modalBackdrop.addEventListener('click', function (event) {
        if (event.target === this) {
            this.style.opacity = '0'; // Fade out the backdrop
            // Hide all modals
            document.getElementById('contentModal').style.display = 'none';
            document.getElementById('settingsModal').style.opacity = '0';
            document.getElementById('settingsModal').style.transform = 'translate(-50%, -50px)'; // Move it slightly above the center

            // Wait for the transitions to finish before hiding the elements
            setTimeout(() => {
                this.style.display = 'none'; // Hide the backdrop
                document.getElementById('settingsModal').style.display = 'none';
            }, 300);
        }
    });

    serviceProviderSwitch.addEventListener('change', function () {
        const providerOnlyItems = document.querySelectorAll('.checklist-item[data-provider-only="true"]');

        if (this.checked) {
            // Restore the items to normal
            providerOnlyItems.forEach(item => {
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            });
        } else {
            // Grey out the items
            providerOnlyItems.forEach(item => {
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            });
        }
    });

    const issuerSwitch = document.getElementById('issuerSwitch');

    issuerSwitch.addEventListener('change', function () {
        const items = document.querySelectorAll('.checklist-item[data-issuer-only="true"]');

        items.forEach(item => {
            if (item.style.opacity === "0.5") {
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            } else {
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            }
        });
    });



    // Reference to the modal
    // Open the contentModal when a testing-approach button is clicked
    document.querySelectorAll('.testing-approach').forEach(button => {
        button.addEventListener('click', function() {
            // Fetch the custom content for the modal based on the clicked button
            const approach = this.getAttribute('data-approach');
            const contentModalDiv = document.querySelector('.content');
    
            // Hide all content sections within the modal
            document.querySelectorAll('.modal-content-section').forEach(section => {
                section.style.display = 'none';
            });
    
            // Show the content section that corresponds to the clicked button
            const contentSection = document.querySelector(`[data-content-for="${approach}"]`);
            if (contentSection) {
                contentModalDiv.innerHTML = contentSection.innerHTML;
                contentSection.style.display = 'none'; // Hide the original content in its initial position
            }
    
            // Show the modal backdrop
            modalBackdrop.style.display = 'block';
            setTimeout(() => {
                modalBackdrop.style.opacity = '1';
            }, 50); 
    
            // Show the content modal with a transition
            const contentModal = document.getElementById('contentModal');
            contentModal.style.display = 'block';
            setTimeout(() => {
                contentModal.style.opacity = '1';
                contentModal.style.transform = 'translate(-50%, -50%)';
            }, 50);
        });
    });

    // Close the contentModal when the close button is clicked
    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('modalBackdrop').style.display = 'none';
        document.getElementById('contentModal').style.display = 'none';
    });

    // Close the modal when clicking outside of it
    document.getElementById('modalBackdrop').addEventListener('click', function (event) {
        if (event.target === this) {
            this.style.display = 'none';
            document.getElementById('contentModal').style.display = 'none';
            document.getElementById('settingsModal').style.display = 'none';
        }
    });

});

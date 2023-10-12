const approachContent = {
    '5.3.1.a': {
        default: `
            <h3>5.3.1.a</h3>
            <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates.</p>
        `,
        sophos: `
        <h3>5.3.1.a</h3>
        <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates.</p>
        <p>Using <b>Sophos Central</b></p>
        <p>Confirm what <i>Update Management Policy</i> the computers in the CDE are using, Then check that policy to see that is has <i>Scheduled Updates</i> enabled</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/14cad642-ce9c-4e06-4f03-42fa8cbf8b00/public" alt="Sophos Scheduled Updates">
        `
    },
    '5.3.1.b': {
        default: `
        <h3>5.3.1.b</h3>
        <p>Examine system components and logs, to verify that the anti-malware solution(s) and definitions are current and have been promptly deployed</p>
        `
    },
    '5.3.2.a': {
        default: `
        <h3>5.3.2.a</h3>
        <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution(s) is configured to perform at least one of the elements specified in this requirement.</p>
        `
    },
    '5.3.2.b': {
        default: `
        <h3>5.3.2.b</h3>
        <p>Examine system components, including all operating system types identified as at risk for malware, to verify the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.</p>
        `
    },
    '5.3.2.c': {
        default: `
        <h3>5.3.2.c</h3>
        <p>Examine logs and scan results to verify that the solution(s) is enabled in accordance with at least one of the elements specified in this requirement.</p>
        `
    },
    '5.4.1': {
        default: `
        <h3>5.4.1</h3>
        <p>Observe implemented processes and examine mechanisms to verify controls are in place to detect and protect personnel against phishing attacks.</p>
        <hr />
        <h4>DMARC, SPF, and DKIM</h4>
        <p>DMARC, SPF, and DKIM work together to fight phishing by ensuring email authenticity. SPF verifies the email source, DKIM ensures the message hasn't been altered, and DMARC specifies what to do if either check fails. Together, they make it hard for phishers to impersonate trusted domains.</p>
        <h4>Check the email domain for SPF</h4>
        <div class="terminal"><code>
            <span class="command">dig</span> <span class="option">TXT</span> <span class="domain">example.com</span> <span class="option">+short</span> | <span class="command">grep</span> spf
        </code></div>
        <p>The output will look like this if it's configured</p>
        <div class="terminal"><code>
        "v=spf1 ip4:54.0.14.116 include:spf.protection.outlook.com -all"
        </code></div>
        <p>The <b>ip4:</b> and <b>include:</b> are sources that are trusted. At the end it will either have a catch all with either a <b>~</b> or <b>-</b>. <b>~all</b> is a softfail and means it will generally still accept other sources but might categorize them as suspicious. <b>-all</b> is a fail, meaning if the source wasn't on the list it should be rejected.</p>
        <h4>Check the email domain for DMARC</h4>
        <div class="terminal"><code>
        <span class="command">dig</span> <span class="option">TXT</span> <span class="domain">_dmarc.example.com</span> <span class="option">+short</span>
        </code></div>
        <p>This is the output</p>
        <div class="terminal"><code>
        "v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com; ruf=mailto:dmarc-forensic@example.com"
        </code></div>
        <p>The output will have a policy option with a <b>p=</b>. This can be <b>none</b>, <b>quarantine</b>, or <b>reject</b>. <b>None</b> is for monitoring, <b>quarantine</b> moves suspicious emails to spam, and <b>reject</b> blocks them.</p>
        <hr />
        `
    }
};


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
    //
    document.getElementById('toggle-sub-reqs').addEventListener('click', function () {
        if (subRequirementsPanel.classList.contains('shrunken')) {
            expandSubRequirements();
        } else {
            shrinkSubRequirements();
        }
    });


    //
    //
    document.querySelectorAll('.checklist-item').forEach(item => {
        item.addEventListener('click', function () {
            const itemReq = this.getAttribute('data-item-requirement'); // Get the unique item requirement
            loadContentForChecklistItem(itemReq);
        });
    });


    //
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

        updateTabColor(itemReq);
    }

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

    const checklistTabs = document.querySelectorAll('.checklist-tab');
    checklistTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const subReq = this.getAttribute('data-sub-requirement');
            showContentForChecklistItem(subReq);
        });
    });


    //
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



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    /*
     SERVICE PROVIDER FUNCTIONALLITY

     This Section Deals with the Service Provider Functionality in Settings and in the List enabling and disabling certain Items based on that result
    */

    const serviceProviderSwitch = document.getElementById('serviceProviderSwitch');
    /*
     The handleServiceProviderSwitchChange function manages the visibility and interactivity
     of checklist items that are meant only for service providers. 
     
     When the serviceProviderSwitch is checked, all provider-only checklist items are made fully 
     visible and interactable. When unchecked, these items are greyed out and made non-interactable.
    */
    function handleServiceProviderSwitchChange() {
        const providerOnlyItems = document.querySelectorAll('.checklist-item[data-provider-only="true"]');

        if (serviceProviderSwitch.checked) {
            providerOnlyItems.forEach(item => {
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            });
            localStorage.setItem('settings-provider', '1');
        } else {
            providerOnlyItems.forEach(item => {
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            });
            localStorage.setItem('settings-provider', '0');
        }
    }
    serviceProviderSwitch.addEventListener('change', handleServiceProviderSwitchChange);

    handleServiceProviderSwitchChange();

    const providerstoredValue = localStorage.getItem('settings-provider');

    if (providerstoredValue !== null) {
        // Set the serviceProviderSwitch based on the stored value
        serviceProviderSwitch.checked = providerstoredValue === '1';

        // Call the function to apply the correct styles based on the saved state
        handleServiceProviderSwitchChange();
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    const issuerSwitch = document.getElementById('issuerSwitch');

    function handleissuerswitchchange() {
        const issueritems = document.querySelectorAll('.checklist-item[data-issuer-only="true"]');

        if (issuerSwitch.checked){
            issueritems.forEach(item =>{
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            });
            localStorage.setItem('settings-issuer', '1')
        } else {
            issueritems.forEach(item =>{
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            });
            localStorage.setItem('settings-issuer', '0');
        }
    }
    issuerSwitch.addEventListener('change', handleissuerswitchchange);

    handleissuerswitchchange();

    const issuerstoredvalue = localStorage.getItem('settings-issuer');

    if (issuerstoredvalue !== null){

        issuerSwitch.checked = issuerstoredvalue === '1';

        handleissuerswitchchange();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Open the contentModal when a testing-approach button is clicked
    document.querySelectorAll('.testing-approach').forEach(button => {
        button.addEventListener('click', function () {
            const approach = this.getAttribute('data-approach');
            const contentModalDiv = document.querySelector('.content');
            const contentModal = document.getElementById('contentModal');

            // Set the data-approach attribute to the contentModal
            contentModal.setAttribute('data-approach', approach);

            // Load Default Content
            let contentToShow = approachContent[approach].default;

            // Load Custom Content
            if (approach === '5.3.1.a' && sophosSwitch.checked) {
                contentToShow = approachContent[approach].sophos;
            }

            contentModalDiv.innerHTML = contentToShow;

            // Display logic for the modal
            modalBackdrop.style.display = 'block';
            setTimeout(() => {
                modalBackdrop.style.opacity = '1';
            }, 50);

            contentModal.style.display = 'block';
            setTimeout(() => {
                contentModal.style.opacity = '1';
                contentModal.style.transform = 'translate(-50%, -50%)';
            }, 50);
        });
    });

    document.querySelectorAll('.contentModal button').forEach(button => {
        button.addEventListener('click', function () {
            let approach = document.getElementById('contentModal').getAttribute('data-approach');
            let status = {
                'complete': '1',
                'ccw': '2',
                'na': '3',
                'close': '0'
            }[this.className];

            localStorage.setItem(approach, status);

            let correspondingButton = document.querySelector(`.testing-approach[data-approach="${approach}"]`);
            setButtonColor(correspondingButton, status);


            // Hide the modal and the backdrop
            document.getElementById('modalBackdrop').style.display = 'none';
            document.getElementById('contentModal').style.display = 'none';
        });
    });

    window.addEventListener('load', function () {
        document.querySelectorAll('.testing-approach').forEach(button => {
            let approach = button.getAttribute('data-approach');
            let status = localStorage.getItem(approach);

            if (status !== null) {
                setButtonColor(button, status);
            }
        });
    });

    // Close the modal when clicking outside of it
    document.getElementById('modalBackdrop').addEventListener('click', function (event) {
        if (event.target === this) {
            this.style.display = 'none';
            document.getElementById('contentModal').style.display = 'none';
            document.getElementById('settingsModal').style.display = 'none';
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // AV - Sophos

    const sophosSwitch = document.getElementById('SophosSwitch');

    // Function to handle the change in the SophosSwitch state.
    function handleSophosSwitchChange() {
        // Save the state of the SophosSwitch checkbox to localStorage.
        if (sophosSwitch.checked) {
            localStorage.setItem('settings-av-sophos', '1');
        } else {
            localStorage.setItem('settings-av-sophos', '0');
        }
    }

    // Attach an event listener to the SophosSwitch checkbox.
    sophosSwitch.addEventListener('change', handleSophosSwitchChange);


    const storedValue = localStorage.getItem('settings-av-sophos');

    if (storedValue !== null) {
        // Set the SophosSwitch based on the stored value.
        sophosSwitch.checked = storedValue === '1';
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function setButtonColor(button, status) {
        button.style.borderRadius = '5px';  // Ensure rounded corners
        button.style.boxShadow = 'none';    // Remove shadow

        switch (status) {
            case '1':
                button.style.backgroundColor = '#A8E6CF'; // Pastel Green
                break;
            case '2':
                button.style.backgroundColor = '#AEDFF7'; // Pastel Blue
                break;
            case '3':
                button.style.backgroundColor = '#FFD3B6'; // Pastel Yellow
                break;
            default:
                button.style.backgroundColor = ''; // default color
        }
    }

});

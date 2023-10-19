const approachContent = {
    '5.1.1': {
        default: `
        <h3>5.1.1</h3>
        <p>All security policies and operational procedures that are identified in Requirement 5 are:
        <ul>
        <li>Documented.</li>
        <li>Kept up to date.</li>
        <li>In use.</li>
        <li>Known to all affected parties.</li>
        </ul>
        </p>
        `
    },
    '5.1.2.a': {
        default: `
        <h3>5.1.2.a</h3>
        <p>Examine documentation to verify that descriptions of roles and responsibilities for performing activities in Requirement 5 are documented and assigned.</p>
        <hr/>
        <h4>Documented Roles and Responsibilities</h4>
        <p>Having a RACI matrix to track this</p>
        <p>R - Responsible: The person who performs the task.</p>
        <p>A - Accountable: The person ultimately answerable for the task.</p>
        <p>C - Consulted: The person who provides input prior to the task being executed.</p>
        <p>I - Informed: The person who is kept informed about the task's progress.</p>

        <div id="jobTitleForm">
            <input type="text" id="jobTitleInput" placeholder="Enter Job Title">
            <button id="addJobTitle">Add Job Title</button>
        </div>

        <!-- RACI Matrix -->
        <table id="raciMatrix">
            <thead>
                <tr>
                    <th>Tasks/Responsibilities</th>
                    <!-- Job title columns will be added here dynamically -->
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Anti-malware Deployment</b></td>
                </tr>
                <tr>
                    <td><b>Risk Evaluation</b></td>
                </tr>
                <tr>
                    <td><b>Anti-malware Maintenance</b></td>
                </tr>
                <tr>
                    <td><b>Phishing Defense</b></td>
                </tr>
            </tbody>
        </table>
        `
    },
    '5.1.2.b': {
        default: `
        <h3>5.1.2.b</h3>
        <p>Interview personnel with responsibility for
        performing activities in Requirement 5 to verify that
        roles and responsibilities are assigned as documented and are understood.</p>
        `
    },
    '5.3.1.a': {
        default: `
            <h3>5.3.1.a</h3>
            <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates.</p>
        `,
        sophos: `
        <h3>5.3.1.a</h3>
        <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution is configured to perform automatic updates.</p>
        <hr />
        <h4>Sophos Central</h4>
        <p>Confirm what <i>Update Management Policy</i> the computers in the CDE are using, Then check that policy to see that is has <i>Scheduled Updates</i> enabled</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/14cad642-ce9c-4e06-4f03-42fa8cbf8b00/public" alt="Sophos Scheduled Updates">
        <hr />
        `
    },
    '5.3.1.b': {
        default: `
        <h3>5.3.1.b</h3>
        <p>Examine system components and logs, to verify that the anti-malware solution(s) and definitions are current and have been promptly deployed</p>
        `,
        sophos: `
        <h3>5.3.1.b</h3>
        <p>Examine system components and logs, to verify that the anti-malware solution(s) and definitions are current and have been promptly deployed</p>
        <hr />
        <h4>Sophos Central</h4>
        <p>Going into the Computers settings in Sophos Central you will see a last updated time</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/5da68cfb-e981-4c73-2d5b-f2f81b348400/public" alt="Sophos Central Last Update">
        <p>You can also go into the events and see past updates</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/24ac714b-4a2a-4b52-2ac9-15b03d4e8a00/public" alt="Sophos Central Update History">
        <hr />
        <h4>Sophos Endpoint Agent</h4>
        <p>You can also verify this step on the local machine in the bottom right of the Agent you'll see an <b>about</b> link. You'll find the last update there.</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/96838d26-f7b1-4bf2-4c23-d6cf6cc35c00/public" alt="Sophos Client Updates">
        <hr />
        `
    },
    '5.3.2.a': {
        default: `
        <h3>5.3.2.a</h3>
        <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution(s) is configured to perform at least one of the elements specified in this requirement.</p>
        `,
        sophos: `
        <h3>5.3.2.a</h3>
        <p>Examine anti-malware solution(s) configurations, including any master installation of the software, to verify the solution(s) is configured to perform at least one of the elements specified in this requirement.</p>
        <hr />
        <h4>Sophos Central</h4>
        <p>Check under the Threat Policy for the computers in the CDE that Realtime protection is enabled</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/c2f3983f-01fc-4cae-ea28-5d19e706d700/public" alt="Sophos Central Real Time Scanning">
        <hr />
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
    '5.3.4': {
        default: `
        <h3>5.3.4</h3>
        <p>Audit logs for the anti-malware solution(s) are enabled and retained in accordance with Requirement 10.5.1.</p>
        `,
        sophos: `
        <h3>5.3.4</h3>
        <p>Audit logs for the anti-malware solution(s) are enabled and retained in accordance with Requirement 10.5.1.</p>
        <hr />
        <h4>Sophos Central</h4>
        <p>Sopho Central by default saves event logs for the past 90 days within their dashboard. You can get to them by going to the Computers page, and then selecting the events tab. You can either view them their or be more selective in the <b>View Events Report</b> section (in the top right of that page)</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/b4e7687b-7b08-474e-cf02-6d94e8f21100/public" alt="Sophos Central Events in the last 90 Days">
        <p>This satisfies the requirement to keep the past 90 days online for ready analysis. You will have to manually store the records necessary to keep the whole past 12 months of logs.</p>
        <p>You will need to document where these logs are stored.</p>
        <p>here is a python script that can be used to merge the old records with the new ones</p>
        <div class="terminal"><code>
    <span class="command">import</span> csv<br>
    <span class="command">import</span> sys<br>
    <br>
    <span class="command">def</span> <span class="domain">read_csv</span>(file_path):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;content = []<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="command">with</span> <span class="domain">open</span>(file_path, 'r') <span class="command">as</span> f:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reader = csv.reader(f)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="command">for</span> row <span class="command">in</span> reader:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content.append(tuple(row))<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="command">return</span> content<br>
    <br>
    <span class="command">def</span> <span class="domain">merge_csvs</span>(csv1, csv2):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;merged_set = <span class="domain">set</span>(csv1[1:])<br>
        &nbsp;&nbsp;&nbsp;&nbsp;merged_set.update(<span class="domain">set</span>(csv2[1:]))<br>
        &nbsp;&nbsp;&nbsp;&nbsp;merged_list = [csv1[0]]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;merged_list.extend(<span class="domain">sorted</span>(<span class="domain">list</span>(merged_set), key=<span class="command">lambda</span> x: x[1]))<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="command">return</span> merged_list<br>
    <br>
    <span class="command">def</span> <span class="domain">write_csv</span>(file_path, content):<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="command">with</span> <span class="domain">open</span>(file_path, 'w', newline='') <span class="command">as</span> f:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writer = csv.writer(f)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="command">for</span> row <span class="command">in</span> content:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writer.writerow(row)<br>
    <br>
    <span class="command">if</span> __name__ <span class="command">==</span> "__main__":<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="command">if</span> len(sys.argv) < 4:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">print</span>("Usage: python merge_csvs.py &lt;path_to_first_csv&gt; &lt;path_to_second_csv&gt; &lt;path_to_output_csv&gt;")<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sys.exit(1)<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;csv1_path = sys.argv[1]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;csv2_path = sys.argv[2]<br>
        &nbsp;&nbsp;&nbsp;&nbsp;output_path = sys.argv[3]<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;csv1_content = <span class="domain">read_csv</span>(csv1_path)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;csv2_content = <span class="domain">read_csv</span>(csv2_path)<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">print</span>(f"Rows in {csv1_path}: {len(csv1_content) - 1}")<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">print</span>(f"Rows in {csv2_path}: {len(csv2_content) - 1}")<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;merged_content = <span class="domain">merge_csvs</span>(csv1_content, csv2_content)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;duplicates_removed = (len(csv1_content) + len(csv2_content) - 2) - len(merged_content) + 1<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">print</span>(f"Duplicate rows removed: {duplicates_removed}")<br>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">write_csv</span>(output_path, merged_content)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="domain">print</span>(f"Merged CSV written to {output_path}")<br>
        </code></div>
        <p>Here is a calendar reminder for every 2 months, you can just download 3 months and merge them together to be safe.</p>
        <button onclick="download5_3_4ICS()">Download Calendar Reminder</button>
        <p>You may also want to place this in your ticketing system as a reacurring ticket</p>
        <hr />
        `
    },
    '5.3.5.a': {
        default: `
        <h3>5.3.5.a</h3>
        <p>Examine anti-malware configurations, to verify that the anti-malware mechanisms cannot be disabled or altered by users.</p>
        `,
        sophos: `
        <h3>5.3.5.a</h3>
        <p>Examine anti-malware configurations, to verify that the anti-malware mechanisms cannot be disabled or altered by users.</p>
        <hr />
        <h4>Sophos Central</h4>
        <p><b>Tamper Protection</b> is the feature that will only allow users with a password obtained in Sophos Central to modify the settings and uninstall the agent. Under the computer settings you can see if <b>Tamper Protection</b> is turned on</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/f772bd2b-a319-4a19-64ec-5a505a65fb00/public" alt="Sophos Central Tamper Protection">
        <hr />
        <h4>Sophos Endpoint Agent</h4>
        <p>Go to the computer and verify they can't modify the settings. In the Agent, select <b>Admin sign-in</b> and you should be prompted for a password</p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/0bb6c5b9-c58c-45fd-ffdd-b84a69602700/public" alt="Sophos Agent Tamper Protection">
        <hr />
        `
    },
    '5.3.5.b': {
        default: `
        <h3>5.3.5.b</h3>
        <p>Interview responsible personnel and observe processes to verify that any requests to disable or alter anti-malware mechanisms are specifically documented and authorized by management on a case-by-case basis for a limited time period.</p>
        <hr />
        <h4>Documented Procedure</h4>
        <label for="jobTitle">Management Position:</label>
        <input type="text" id="jobTitle">
        <br />
        <!-- Formality Slider -->
        <label for="formalitySlider">Formality:</label>
        <input type="range" id="formalitySlider" min="1" max="3" step="1">
        <br/>
        <!-- Length Slider -->
        <label for="lengthSlider">Length:</label>
        <input type="range" id="lengthSlider" min="1" max="3" step="1">
        <br />
        <p></p>
        <!-- Button to Generate Text -->
        <button id="generateTextButton">Generate Text</button>
        <p></p>

        <!-- Display Area for Generated Text -->
        <div id="output"></div>
        <hr />
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
        <h4>Anti-phishing in Microsoft 365</h4>
        <p>Find these settings in Microsoft 365 Defender <a href="https://security.microsoft.com/antiphishing">https://security.microsoft.com/antiphishing</a></p>
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/99545da2-5c93-43dd-4135-dabb52bc1e00/public" alt="Microsoft 365 Anti-Phishing">
        <img src="https://imagedelivery.net/FgYlnTl8G0V_NRsRo5-YEg/ec0ebc62-4255-4e84-09fb-06ac23812e00/public" alt="More Microsoft 365 Anti-Phishing">
        <p>Microsoft 365's <b>Mailbox Intelligence</b> learns user behavior to spot suspicious emails, while <b>Spoof Intelligence</b> checks for spoofing signs. The <b>First Contact Safety Tip</b> alerts users to new senders, and the <b>Unauthenticated Senders Symbol</b> flags unverified emails with a <b>?</b>. These features collectively strengthen your defense against phishing.</p>
        <hr />
        `
    }
};




function formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
}


function download5_3_4ICS() {
    const event = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:' + formatDate(new Date()), // start date of the event
        'DTEND:' + formatDate(new Date(new Date().getTime() + 1 * 60 * 60 * 1000)), // end date of the event (1 hour after start date for this example)
        'RRULE:FREQ=MONTHLY;INTERVAL=2', // recurring every 2 months
        'SUMMARY:Pull the last 90 days of logs',
        'DESCRIPTION:Reminder to pull the last 90 days of logs for compliance with requirement 5.3.4.',
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([event], { type: 'text/calendar' });
    const a = document.createElement('a');
    a.download = 'log-reminder.ics';
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/calendar', a.download, a.href].join(':');
    a.click();
}
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

    function getFirstVisibleChecklistItem() {
        const checklistItems = document.querySelectorAll('#checklist-panel .checklist-item');
        for (let item of checklistItems) {
            if (item.style.display !== 'none') {
                return item;
            }
        }
        return null;
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

            filterChecklistItems(subReqNumber); // Original function

            const firstVisibleChecklistItem = getFirstVisibleChecklistItem(); // New function
            if (firstVisibleChecklistItem) {
                // Trigger a click event on the first visible checklist item
                firstVisibleChecklistItem.click();
            }

            shrinkSubRequirements();
        });
    });

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

        if (issuerSwitch.checked) {
            issueritems.forEach(item => {
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            });
            localStorage.setItem('settings-issuer', '1')
        } else {
            issueritems.forEach(item => {
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            });
            localStorage.setItem('settings-issuer', '0');
        }
    }
    issuerSwitch.addEventListener('change', handleissuerswitchchange);

    handleissuerswitchchange();

    const issuerstoredvalue = localStorage.getItem('settings-issuer');

    if (issuerstoredvalue !== null) {

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

            if (approach === '5.3.1.b' && sophosSwitch.checked) {
                contentToShow = approachContent[approach].sophos;
            }

            if (approach === '5.3.2.a' && sophosSwitch.checked) {
                contentToShow = approachContent[approach].sophos;
            }

            if (approach === '5.3.4' && sophosSwitch.checked) {
                contentToShow = approachContent[approach].sophos;
            }


            if (approach === '5.3.5.a' && sophosSwitch.checked) {
                contentToShow = approachContent[approach].sophos;
            }


            contentModalDiv.innerHTML = contentToShow;
            initializeDynamicContent();

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


    const sophosstoredValue = localStorage.getItem('settings-av-sophos');

    if (sophosstoredValue !== null) {
        // Set the SophosSwitch based on the stored value.
        sophosSwitch.checked = sophosstoredValue === '1';
    }

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const lazySwitch = document.getElementById('lazySwitch');

    function handlelazyswitchchange() {
        const lazyitems = document.querySelectorAll('.checklist-item[data-lazy="true"]');

        if (lazySwitch.checked) {
            lazyitems.forEach(item => {
                item.style.opacity = "0.5";
                item.style.pointerEvents = "none";
            });
            localStorage.setItem('settings-lazy', '0')
        } else {
            lazyitems.forEach(item => {
                item.style.opacity = "1";
                item.style.pointerEvents = "auto";
            });
            localStorage.setItem('settings-lazy', '1');
        }
    }
    lazySwitch.addEventListener('change', handlelazyswitchchange);

    handlelazyswitchchange();

    const lazystoredvalue = localStorage.getItem('settings-lazy');

    if (lazystoredvalue !== null) {

        lazySwitch.checked = lazystoredvalue === '1';

        handlelazyswitchchange();
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function initialize5_3_5_b() {
        console.log("Initializing 5.3.5.b...");

        const jobTitleInput = document.getElementById('jobTitle');
        const formalitySlider = document.getElementById('formalitySlider');
        const lengthSlider = document.getElementById('lengthSlider');
        const generateTextButton = document.getElementById('generateTextButton');

        if (jobTitleInput) {
            console.log("Found jobTitleInput");
            jobTitleInput.value = localStorage.getItem('5.3.5.management') || '';
            jobTitleInput.addEventListener('input', function () {
                console.log("jobTitleInput value changed", jobTitleInput.value);
                localStorage.setItem('5.3.5.management', jobTitleInput.value);
            });
        }

        // Handle formality and length sliders
        if (formalitySlider) {
            formalitySlider.value = localStorage.getItem('formality') || '1';
            formalitySlider.addEventListener('change', function () {
                console.log("formalitySlider value changed", formalitySlider.value);
                localStorage.setItem('formality', formalitySlider.value);
            });
        }

        if (lengthSlider) {
            lengthSlider.value = localStorage.getItem('length') || '1';
            lengthSlider.addEventListener('change', function () {
                console.log("lengthSlider value changed", lengthSlider.value);
                localStorage.setItem('length', lengthSlider.value);
            });
        }

        // Handle "Generate Text" button
        if (generateTextButton) {
            console.log("Found generateTextButton");
            generateTextButton.addEventListener('click', function () {
                let generatedText;
                const formality = formalitySlider ? formalitySlider.value : '1';
                const length = lengthSlider ? lengthSlider.value : '1';
                const managementPosition = jobTitleInput ? jobTitleInput.value : '[Management Position]';

                if (length === '1') {
                    switch (formality) {
                        case '1':
                            generatedText = `Alright, so if anyone thinks about tweaking the anti-malware tools, that's a no-go. If there's ever a need to pause the tools, you gotta chat with ${managementPosition} about it. And remember, if we do turn it off, let's disconnect from the web and run a complete check once it's back up.`;
                            break;
                        case '2':
                            generatedText = `For those handling our anti-malware tools, please be aware that they shouldn't be disabled or changed. If there's a genuine reason to do so, it's essential to get a nod from ${managementPosition}. Always ensure extra precautions, like disconnecting from the internet, and performing a full system scan afterward.`;
                            break;
                        case '3':
                        default:
                            generatedText = `It is of utmost importance that the anti-malware mechanisms are not disabled or altered without proper procedure. Any alterations must be documented and authorized by the ${managementPosition}. Should the mechanism be deactivated, the respective system must be disconnected from the internet and a thorough scan should be executed upon reactivation.`;
                            break;
                    }
                } else if (length === '2') {
                    switch (formality) {
                        case '1':
                            generatedText = `Hey team, remember our anti-malware tools? Well, they're kinda like our security guards, so no tweaking them. If you've got a real good reason to turn them off or make changes, make sure to have a chat with ${managementPosition}. Just a heads-up, if you ever need to turn them off, disconnect from the internet. We don't want any unwanted guests. Oh, and once you turn it back on, do a complete system check. Better safe than sorry!`;
                            break;
                        case '2':
                            generatedText = `Attention all personnel, the anti-malware mechanisms we have in place serve as critical components of our security infrastructure. It's imperative that these mechanisms are not altered or deactivated without proper justification. Any required changes should be brought to the attention of ${managementPosition} for authorization. In the event of deactivation, as a precautionary measure, disconnect the system from the internet. Upon reactivation, it's mandatory to perform a comprehensive system scan to ensure its integrity.`;
                            break;
                        case '3':
                        default:
                            generatedText = `To all stakeholders, the integrity of our anti-malware mechanisms is paramount for the security of our organization's digital assets. Any contemplation regarding the alteration or deactivation of these mechanisms must be meticulously documented and subsequently authorized by ${managementPosition}. Should there be a period of deactivation, the system in question must be isolated from internet connectivity. A thorough and comprehensive scan is required upon the mechanism's reactivation to ensure no vulnerabilities have been introduced.`;
                            break;
                    }
                } else if (length === '3') {
                    switch (formality) {
                        case '1':
                            generatedText = `Alright team, let's chat about our anti-malware tools. Think of them like our digital bodyguards. They're here to keep the bad guys out, so no playing around with them, alright? If you've got a super legit reason to turn them off or tweak something, you gotta let ${managementPosition} know. And hey, if you're turning them off, pull the plug on the internet too. We don't want to invite any digital party crashers. When you power them back on, give everything a good look-over with a full system check. It's like making sure you didn't forget to lock the front door.`;
                            break;
                        case '2':
                            generatedText = `Team, our anti-malware mechanisms play a crucial role in safeguarding our digital landscape. These tools are meticulously calibrated to ensure optimal security. Any considerations to alter or deactivate them must be approached with utmost caution. Such actions require a formal approval process, spearheaded by ${managementPosition}. In the interim period when they're off, it's of paramount importance to disconnect the system from the internet to prevent potential threats. Upon reactivation, a thorough system-wide scan is non-negotiable to confirm the system's integrity and ensure no breaches occurred.`;
                            break;
                        case '3':
                        default:
                            generatedText = `All personnel are hereby reminded of the significance of our established anti-malware protocols. These mechanisms, a cornerstone of our cybersecurity infrastructure, have been optimized for maximum efficacy. Any contemplation to deviate from or modify these configurations necessitates a rigorous documentation process and explicit authorization from ${managementPosition}. During any intervals of deactivation, it is imperative that the associated system be severed from all internet connections to negate external threats. Subsequent to the mechanism's re-establishment, a comprehensive audit and scan must be undertaken to ascertain the system's uncompromised status.`;
                            break;
                    }
                }

                const outputDiv = document.getElementById('output');
                if (outputDiv) {
                    outputDiv.innerHTML = `<div style="border: 2px solid #ccc; padding: 10px; border-radius: 10px; background-color: #f8f8f8;">${generatedText}</div>`;
                }
            });
        }
    }

    let raciMatrix;

    function initialize5_1_2_a() {
        console.log("Initializing 5.1.2.a...");

        const addJobTitleButton = document.getElementById('addJobTitle');

        if (addJobTitleButton) {
            addJobTitleButton.addEventListener('click', function () {
                const jobTitle = document.getElementById('jobTitleInput').value;
                addJobTitleToMatrix(jobTitle);
                document.getElementById('jobTitleInput').value = '';
                saveMatrixToLocalStorage();
            });
        }

        // Load matrix when the section is initialized
        loadMatrixFromLocalStorage();
    }

    function saveMatrixToLocalStorage() {
        console.log("Saving to localStorage...");
        const raciMatrix = document.getElementById('raciMatrix'); // Fetch it here
        if (!raciMatrix) return;

        let csvArr = [];
        const rows = raciMatrix.querySelectorAll('tr');

        rows.forEach(row => {
            let rowData = [];
            const cells = row.querySelectorAll('th, td');
            cells.forEach(cell => {
                if (cell.querySelector('select')) {
                    rowData.push(cell.querySelector('select').value);
                } else {
                    rowData.push(cell.innerText);
                }
            });
            csvArr.push(rowData.join(','));
        });

        const csvString = csvArr.join('\n');
        localStorage.setItem('raciMatrixCSV', csvString);
    }

    function loadMatrixFromLocalStorage() {
        const raciMatrix = document.getElementById('raciMatrix');
        const csvString = localStorage.getItem('raciMatrixCSV');
        if (!raciMatrix) return; // Check if raciMatrix exists
        if (!csvString) return;

        const csvArr = csvString.split('\n');
        const header = csvArr.shift().split(',');

        header.forEach(title => {
            if (title !== "Tasks/Responsibilities") {
                addJobTitleToMatrix(title);
            }
        });

        raciMatrix.querySelectorAll('tbody tr').forEach((row, rowIndex) => {
            const values = csvArr[rowIndex].split(',');
            values.shift(); // Remove task name as it's already there

            row.querySelectorAll('select').forEach((select, selectIndex) => {
                select.value = values[selectIndex];
            });
        });
    }

    function addJobTitleToMatrix(jobTitle) {
        // Add column header for the new job title
        const raciMatrix = document.getElementById('raciMatrix');
        if (!raciMatrix) return; // Check if raciMatrix exists
        const headerRow = raciMatrix.querySelector('thead tr');
        const th = document.createElement('th');

        th.innerText = jobTitle; // Just setting the job title directly to the th
        headerRow.appendChild(th);

        // Add RACI dropdowns for each task in the matrix
        raciMatrix.querySelectorAll('tbody tr').forEach(row => {
            const td = document.createElement('td');
            const select = document.createElement('select');
            ['', 'R', 'A', 'C', 'I'].forEach(optionValue => {
                const option = document.createElement('option');
                option.value = optionValue;
                option.innerText = optionValue;
                select.appendChild(option);
            });
            td.appendChild(select);
            row.appendChild(td);
        });
    }

    // Load matrix when page is loaded
    window.addEventListener('DOMContentLoaded', (event) => {
        loadMatrixFromLocalStorage();
    });

    function initializeDynamicContent() {
        console.log("Initializing Dynamic Content...");

        initialize5_3_5_b();
        initialize5_1_2_a();
    }


});

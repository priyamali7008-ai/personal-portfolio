  
        const tablinks =
            document.getElementsByClassName("tab-links");

        const tabcontents =
            document.getElementsByClassName("tab-contents");


        function opentab(tabname, element) {

            // Remove active class from all tab links
            for (let tablink of tablinks) {

                tablink.classList.remove("active-link");

            }


            // Hide all tab contents
            for (let tabcontent of tabcontents) {

                tabcontent.classList.remove("active-tab");

            }


            // Add active class to selected tab
            element.classList.add("active-link");


            // Show selected content
            document
                .getElementById(tabname)
                .classList.add("active-tab");

        }

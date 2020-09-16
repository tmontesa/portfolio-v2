var page = {};

page.contact = Page([
    Section(`Information`, [
        Entry(
            `About`,
            ``,
            `I am Timothy James Montesa, a recent Computing Science student from SFU. I have front & back-end software development experience with clients such as Costco, Fedex, Staples, and Sam’s Club in the US and Canada with PNI Digital Media. Some of my experiences include maintenance of client websites, 3rd party API integration, and internal tools development. I also have Quality Assurance experience with web applications and internal tools.<br /><br />
            
            I am currently looking for a software development job. If you would like to contact me, you may email me at:<br />
            me@tmontesa.com.`
        ),
        Entry(
            `Contact`,
            ``,
            `
                <table>
                    <tr>
                        <td><b>Email</b></td>
                        <td>me@tmontesa.com</td>
                    </tr>
                    <tr>
                        <td><b>Website</b></td>
                        <td>${Link(`https://www.tmontesa.com`)}</td>
                    </tr>
                    <tr>
                        <td><b>Github</b></td>
                        <td>${Link(`https://github.com/tmontesa`)}</td>
                    </tr>
                    <tr>
                        <td><b>Linkedin</b></td>
                        <td>${Link(`https://www.linkedin.com/in/tmontesa/`)}</td>
                    </tr>
                </table>
            `
        )
    ])
])

page.experience = Page ([
    Section(`Industry Experience`, [
        Entry(
            `Junior Developer: Maintenance for Costco Canada & US, Staples US, Sam's Club US, Internal Libraries & Services`,
            `PNI Digital Media, Jan 2020 - Apr 2020 (Ended employment due to COVID-19 impact on work shortage)`,
            List([
                `Maintained, fixed, and improved multiple retailer websites, which included areas such as: credit card transactions, database stored procedures, front-end style sheets, ASP.NET routing, and HTML5 interactive photo art builders, utilizing C#, JS (Angular) / CSS, MS SQL Management Studio, and IIS Express`,
                `Developed multiple test runs for new and legacy code for sites’ middleware, written for NUnit and MSTest with Moq, contributing to the automation initiative for PNI’s retailer projects and aiding in testing phases for continuous integration and deployment`,
                `Automated Costco Photo Center’s customer help form submissions, by serializing front-end form data and sending requests via Zendesk’s Developer API, in order to increase reliability and decrease time needed to handle customer issues by customer service`,
                `Deployed builds and tested various environments on staging and production servers, by utilizing IIS Manager, Octopus, Docker, and Microsoft Azure Deployment, in order to verify the reliability of fixes for developer builds of a retailer site`
            ])
        ),
        Entry(
            `Junior Co-op Development Project: Status Report Web Application`,
            `PNI Digital Media, May 2017 - Dec 2017`,
            List([
                `Developed an internal status reporting web application with 3 other co-ops, utilizing ASP.NET architecture with C#, to create an accessible method for PNI’s project managers to submit project status to product owners without the use of email or external programs`,
                `Designed a relational model, implemented a database, and constructed SQL queries for the project status information being stored, using MS SQL Management Studio, allowing form data to be stored efficiently and read securely on PNI’s servers`,
                `Designed a relational model, implemented a database, and constructed SQL queries for the project status information being stored, using MS SQL Management Studio, allowing form data to be stored efficiently and read securely on PNI’s servers`
            ])
        ),
        Entry(
            `Junior Quality Assurance Analyst Co-op: Fed-Ex US, Costco Canada & US, Internal Service`,
            `PNI Digital Media, May 2017 - Dec 2017`,
            List([
                `Maintained regression test suites for physical device interaction for Fed-Ex US “Photo Print Kiosks”, utilizing TestTracker, Testrail & JIRA, to validate device compatibility and software stability`,
                `Executed manual test runs and accessibility verification for Costco Canada & US “Photo & Print” subdomain, using Testrail, JIRA, and various Accessibility software, to certify browser/device compatibility and AODA Level A compliance`,
                `Created and ran manual test suites for a PNI Internal Tools system, using Testrail & JIRA, to ensure thorough validation and maintain the quality of the product through multiple testing phases`
            ])
        ),
    ]),
    Section(`Other Experience`, [
        Entry(
            `Customer Service Representative`,
            `Dollarama North Vancouver, Aug 2019 - Dec 2019`,
            List([
                `Handled cash and credit transactions as a cashier, by efficiently calculating total costs, in order to minimize the waiting time for customers`,
                `Stocked and exchanged various home, hygiene, food, and craft supplies, by using organizational and analytical methods to determine the amount or type of items needed in a certain category, in order to provide the amount of items customers may need during times of low supply`,
                `Assisted customers in between prioritized tasks, by managing and planning work time, to help customers locate items or suggest alternatives to items no longer in stock`
            ])
        ),
        Entry(
            `Customer Service Representative, Cook`,
            `Pizza Hut North Vancouver, Jul 2016 - May 2017`,
            List([
                `Obtained customer order and delivery information, by communicating in-person or phone and operating a point-of-sale machine, in order to prepare staff for future orders and document customer order history`,
                `Fulfilled and cooked customer food orders, by adapting to different workflows for unique orders and managed order priority, in order to provide food on time and minimize waiting time for each customer`,
                `Performed inventory on site’s food products, by counting food stock and disposing of expired goods, in order to keep all ingredients as new as possible and report any shortages in ingredients`
            ])
        ),
        Entry(
            `Seasonal Parking Attendant`,
            `Pacific National Exhibition, Jul 2014 - Aug 2014`,
            List([
                `Directed vehicle traffic and oversaw parking spaces, by communicating with vehicle owners and analyzing space availability in different lots, in order to give customers preferred parking spaces and evenly distributing traffic throughout the entire venue`,
                `Assisted customers with questions regarding navigation, event information, and operating rules, by communicating with customers and giving effective and concise explanations`,
                `Relayed information to other workers about lot fill, traffic status, lane routing, and potential danger and hazards, by communicating effectively through a singular radio frequency, in order to inform others of any changes to their workflow or duties`
            ])
        ),
    ])
]);

page.projects = Page([
   Section(`Games`, [
       Entry(
           `“Neapolitan”: A 2D Dungeon Crawler / Restaurant Management Game`,
           `Jul 2020 - Ongoing`,
           List([
               `Prototyped an interactive game, utilizing the Godot 3 IDE, GDScript, and various multimedia tools, to conceptualize and develop a unique experience incorporating elements from various genres`,
               `Designed a procedurally-generated clustered map generator, using an customizable iterative algorithm with GDScript, in order to create new experiences for every new playthrough and maintain replayability over time`,
               `Researched effective game design and architecture, by analyzing other open-source games and materials, in order to maintain the performance of the game at a reasonable frame rate, and to create a reliable and robust code base that can be integrated on with ease`
           ]) + 
           Tags(`Game, Interactive, Web, Godot 3, GDScript, GLSL, Photoshop CC, InDesign CC, Aesprite, GIMP2`)
       ),
       Entry(
        `“Unconventional Swordfighting”: 48-Hour Game Jam Submissione`,
        `Aug 2020`,
        List([
            `Developed a in-browser action-arcade video game, using the Godot 3 IDE and GDScript, as a submission in a community-run “Game Jam”, a 48-hour contest based on creating interactable media using only the provided rudimentary 8-bit asset pack`,
            `Designed limitless player weapon choices, by utilizing a generator that creates a myriad of weapons with varying effectiveness and projectile patterns, allowing the player to approach the game in different ways with the provided gear`,
            `Documented successes and flaws in the approach to develop in a limited timeframe, by analyzing needed or unnecessary time sinks, areas having or lacking organization, and sacrifices made through time or code reusability, in order to improve workflow and time-management for future projects with strict time budgets`
        ]) + 
        Tags(`Game, Interactive, Web, Godot 3, GDScript, Aesprite, GIMP2`) +
        ShowcaseLink(`Link to Demo`, `https://tmontesa.itch.io/unconventional-swordfighting`) +
        ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/mizjam`)
        ),
        Entry(
            `Shogi (Japanese Chess) with AI & Network Play (CMPT 276)`,
            `Oct 2016 - Dec 2016`,
            List([
                `Developed a shogi single/multi-player application with 5 other students, using Julia, Tk GUI Library, and SQLite databases, for a 4-month software engineering course project`,
                `Created a text-based game simulator, by creating a Julia application that reads from stored game state databases, in order to debug piece movement and aid with the testing of AI functionality in the early stages of the development cycle`,
                `Designed and implemented a friendly game interface, using the Tk GUI Library for Julia and GIMP for graphics, as the visual portion of the interactive experience`
            ]) + 
            Tags(`Game, Interactive, Program, Networking, AI, Julia, Tk GUI, SQL, SQLite, GIMP2, Course Project`)
        )
    ]),
    Section(`Multimedia`, [
        Entry(
            `Custom Codec for Lossless-Compressed Bitmap Image Format (CMPT 365)`,
            `May - Aug 2018`,
            List([
                `Developed a custom encoder and decoder for bitmap image files, by extracting header information and pixel data and converting it into a minimal .in3 file type, as an alternate means of storing bitmaps and reducing file size when possible.`,
                `Improved file size required to store .in3 files, by implementing LZW dictionary compression and decompression during the conversion process, in order to store files more efficiently on disk.`
            ]) +
            Tags(`Interactive, Program, Media, Audio, Compression, C++, Qt GUI, Course Project`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/in3-codec`)
        ),
        Entry(
            `BMP Bitmap Rendering & Manipulation (CMPT 365)`,
            `May - Aug 2018`,
            List([
                `Developed an image rendering program for uncompressed .bmp files, using C++ and the QT GUI library, in order to gain understanding of image fundamentals, such as file architecture, indexing, 8-bit color values, etc.`,
                `Implemented various image filters, including grayscale dithering and displaying singular color channels`
            ]) +
            Tags(`Interactive, Program, Media, Image, C++, Qt GUI, Course Project`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/bmp-manipulation`)
        ),
        Entry(
            `WAV Waveform Rendering (CMPT 365)`,
            `May - Aug 2018`,
            List([
                `Developed a waveform rendering program for short .wav files, using C++ and the QT GUI library, in order to gain understanding of audio fundamentals, such as file architecture, sample rate, compression, etc.`
            ]) +
            Tags(`Interactive, Program, Media, Audio, C++, Qt GUI, Course Project`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/wav-waveform`)
        )
    ]),
    Section(`Interactive`, [
        Entry(
            `Interactive Scene WebGL Demo (CMPT 361)`,
            `Aug 2019`,
            List([
                `Developed a simple interactable scene, using WebGL and GLSL, in order to gain understanding of texture mapping, different types of lighting, animation, polygonal shading, and hidden surface removal`,
                `Optionally created simple 3D models, using Blender and Photoshop, in order to gain understanding of 3D modeling and UV mapping`
            ]) +
            Tags(`Interactive, Web, WebGL, OpenGL ES3, GLSL, Blender, GIMP2, Course Project`) +
            ShowcaseLink(`Link to Demo`, `https://tmontesa.github.io/webgl-scene/`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/webgl-scene`)
        ),
        Entry(
            `Space Invaders WebGL Clone (CMPT 361)`,
            `Jun 2019`,
            List([
                `Developed a simple space shooter interactive web game, using WebGL and GLSL, in order to gain understanding of WebGL fundamentals, such as GPU processing, transformation matrices, and shaders`
            ]) +
            Tags(`Game, Interactive, Web, WebGL, OpenGL ES3, GLSL, Course Project`) +
            ShowcaseLink(`Link to Demo`, `https://tmontesa.github.io/webgl-invaders/`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/webgl-invaders`)
        ),
        Entry(
            `Pomodoro Productivity Timer`,
            `Mar 2019`,
            List([
                `Developed a productivity timer based on the Pomodoro technique, using JS and CSS, for personal tracking of time spent on work, as well as decrease burnout rate`
            ]) +
            Tags(`Interactive, Web, Productivity, JS Canvas`) +
            ShowcaseLink(`Link to Demo`, `https://tmontesa.github.io/pomodoro/`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/pomodoro`)
        ),
        Entry(
            `"Puppy Panic" Minigame`,
            `Feb 2019`,
            List([
                `Developed a basic 2D arcade minigame with simple enemy physics, using JS for game logic and GIMP for creating assets, in order to gain more practice for game development, as well as the fundamentals of physics and collision detection`
            ]) +
            Tags(`Game, Interactive, Web, Productivity, JS Canvas`) +
            ShowcaseLink(`Link to Demo`, `https://tmontesa.github.io/puppy-panic/`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/puppy-panic`)
        ),
        Entry(
            `"Flower Catcher" Minigame`,
            `Feb 2018`,
            List([
                `Developed a basic flower catching minigame, using JS for game logic and GIMP for creating assets, to apply basic fundamentals of HTML5 game design, such as update/render loops, JS Canvas, input polling, and implementation of basic game mechanics`
            ]) +
            ShowcaseLink(`Link to Demo`, `https://tmontesa.github.io/flower-catcher/`) +
            ShowcaseLink(`Link to Source Code`, `https://github.com/tmontesa/flower-catcher`)
        )
    ]),
    Section(`Networking`, [
        Entry(
            `Dual-Stack File Transfer Client & Server with Instances (CMPT 371)`,
            `May - Aug 2018`,
            List([
                `Developed basic file transfer client and server programs for Linux, with 2 other students, using C networking, in order to transfer and retrieve any file through a network`,
                `Supported IPv4 and IPv6 connections, by differentiating client addresses from the server program, to allow compatibility between different network types`,
                `Created an automatic instance-spawning system for the server, by forking the program into child processes that distribute data, in order to prevent network bottlenecking and increasing efficiency during multiple client requests`
            ]) +
            Tags(`Networking, Linux, C, File Management, Course Project`)
        )
    ]),
    Section(`Systems`, [
        Entry(
            `Basic C Shell with Program Execution & Piping (CMPT 300)`,
            `Jan - Apr 2017`,
            List([
                `Developed a shell for all Linux distributions, using C, to create a proof-of-concept application that can manipulate programs and files with bash commands`,
                `Implemented ability to use batch commands from any directory, as well as use internal commands to change directory, print working directory, and view history`,
                `Added ability to chain multiple commands and programs by redirecting IO using a file descriptor piping system`
            ]) +
            Tags(`Linux, OS. Bash, C, File Management, Course Project`)
        )
    ]),
    Section(`Emulation`, [
        Entry(
            `KCPSM Microprocessor Emulation (CMPT 276)`,
            `Sept - Oct 2016`,
            List([
                `Developed a simulator for a Picoblaze microprocessor with 3 other members, using the Julia language, with the ability to process inputs through command files.`,
                `Added the ability to process logic functions, such as AND/OR/XOR`,
                `Created functionality for arithmetic operations, such as addition and subtraction with carry, using values stored in 2 different register banks, and/or a constant given in decimal, hexadecimal, binary, or ASCII`
            ]) +
            Tags(`Program, Linux, Julia, Tk GUI, SQL, SQLite, GIMP2, Course Project`)
        )
    ])    
]);


page.education = Page([
    Section(``, [
        Entry(
            `BSc Computing Science`,
            `Simon Fraser University, Sep 2014 - Dec 2019<br />Dean’s Honour Roll - Spring 2018, Fall 2018`,
            ``
        )
    ], SectionType.STUB),
    Section(`Software Development`, [
        Entry(
            `CMPT 475 - Requirements Engineering`,
            ``,
            `Covers topics about determining user expectations for a product, including:` +
            List([
                `Requirements analysis, design specification, scope documentation`,
                `Architectural design (tiered models, middleware, client/server, etc.)`,
                `Business rules, business objects, risk management, testing processes`
            ])
        ),
        Entry(
            `CMPT 383 - Comparative Programming Languages`,
            ``,
            `Covers topics about modern programming languages and their features, including:` +
            List([
                `Functional programming, using Golang`,
                `Concurrent and parallel programming`,
                `Compilation (including JIT), interpreters, pipelines`
            ])
        ),
        Entry(
            `CMPT 276 - Introduction to Software Engineering`,
            ``,
            `An introductory class to software development processes, and covers topics such as:` +
            List([
                `Version control, work distribution, role assignment, and common development methodologies`,
                `CWriting requirements, productivity evaluation, documentation of software`,
                `Testing, licensing, distribution, attribution`
            ])
        ),
    ], SectionType.SMALL),
    Section(`Databases`, [
        Entry(
            `CMPT 454 - Databases II`,
            ``,
            `Covered topics about database storage on physical media and its limitations, including:` +
            List([
                `Crash recovery, concurrency control, transaction processing`,
                `Data storage methods, index structures`,
                `Query optimization`
            ])
        ),
        Entry(
            `CMPT 354 - Databases I`,
            ``,
            `Covered topics about the implementation and use of databases, including:` +
            List([
                `Database modeling, management, entity-relationship models`,
                `Queries and data manipulation`,
                `Relational algebra and relational calculus`
            ])
        )
    ], SectionType.SMALL),
    Section(`Networking & Systems`, [
        Entry(
            `CMPT 471 - Networking II`,
            ``,
            `Covers topics about higher-level networking, including:` +
            List([
                `IP assignment, headers`,
                `Classless inter-domain routing (CIDR), stateless address autoconfiguration (SLAAC/IPv6),  ICMPv4 and v6`,
                `Address-resolution protocol (ARP), routing information protocol (RIP), OSPF routing protocol`
            ])
        ),
        Entry(
            `CMPT 371 - Networking I`,
            ``,
            `Covers topics about data communication fundamentals by analyzing each network layer, including:` +
            List([
                `Protocol layers, peer-to-peer architecture, virtual-circuit networks`,
                `TCP/UDP, its’ applications, and best practices`,
                `Flow control, forwarding, error-checking, broadcast/multicast routing`
            ])
        ),
        Entry(
            `CMPT 300 - Operating Systems`,
            ``,
            `Covers topics about kernel-level systems and the components of an operating system, including:` +
            List([
                `OS structures and implementation, process handling, threaded workloads, synchronization, deadlock handling`,
                `CPU scheduling, hierarchy of memory`,
                `Reading from mass storage, file systems`
            ])
        ),
    ], SectionType.SMALL),
    Section(`Computer Graphics & Media`, [
        Entry(
            `CMPT 361 - Computer Graphics`,
            ``,
            `Covers topics about computer graphics fundamentals using WebGL, including:` +
            List([
                `Graphics pipelines, image formation, GUIs, shader programming`,
                `3D transformation, homogeneous coordinates, animation basics`,
                `Texture mapping, environment mapping, bump mapping, sampling, antialiasing, illumination`
            ])
        ),
        Entry(
            `CMPT 365 - Multimedia Systems`,
            ``,
            `Covered topics about audio, image, and video media creation, storage, and compression, including:` +
            List([
                `Lossless and lossy compression techniques for each type of media`,
                `Media encoding and decoding standards`,
                `Networked media (streaming, live media, instant interactivity, etc.)`
            ])
        ),
        Entry(
            `CMPT 363 - User Interface Design`,
            ``,
            `Covers topics about human-computer interaction, user experience, and intuitive design, including:` +
            List([
                `Usability testing, user-centered design for graphical user interfaces, crowdsourcing`,
                `Requirements development, task-centered design, emotional interfaces, help systems`,
                `Prototyping using Axure, analytical evaluation`
            ])
        ),
        Entry(
            `IAT 102 - Graphic Design`,
            ``,
            `An introductory course to graphic design and visual communications, including:` +
            List([
                `Hierarchy of content, visual organization, use of whitespace, effective and appropriate styling`,
                `Font kerning and tracking, types of font faces, font composition analysis`,
                `Working within constraints of media types (color, space, size, etc.), effective branding for specific audiences`
            ])
        ),
        Entry(
            `IAT 210 - Game Studies: Theory & Design`,
            ``,
            `Covers topics about effective game design and its history, including:` +
            List([
                `Analyzing games as rules (design), as play (experience), and as culture (role)`,
                `Game mechanics, genres, goals, objectives, business, narrative`,
                `Gamification, rewarding interactions, player behaviour, gestalt (emergent actions)`
            ])
        )
    ], SectionType.SMALL),
    Section(`Theoretical Computing`, [
        Entry(
            `CMPT 777/477 - Formal Verification`,
            ``,
            `Covers topics about automated symbolic model checking, including:` +
            List([
               `Propositional logic, well-formed formulas, conjunction normal form (CNF)`,
               `Propositional satisfiability (SAT), Horn-SAT`,
               `Tseitin transformation,  graph coloring, backtracking resolution` 
            ])
        ),
        Entry(
            `CMPT 307 - Data Structures & Algorithms`,
            ``,
            `Covers topics about the design and analysis of efficient algorithms, including:` +
            List([
               `Greedy algorithms (breadth-first, depth-first, Dijstra’s, Kruskal’s, Prim’s), divide & conquer algorithms`,
               `Dynamic programming, network flow algorithms`,
               `NP-completeness` 
            ])
        ),
        Entry(
            `CMPT 225 - Data Structures & Programming`,
            ``,
            `Covers topics about commonly-used data structures and program complexity, including:` +
            List([
               `Stacks, priority queues, trees, hash tables, heaps`,
               `Sorting algorithms (merge, selection, quick, etc.)`,
               `Big-O, Big-Theta, Big-Omega code analysis` 
            ])
        )
    ], SectionType.SMALL),
    Section(`Mathematics`, [
        Entry(
            `MATH 232 - Applied Linear Algebra`,
            ``,
            `Covers topics about linear equations and vector spaces, including:` +
            List([
                `Matrices, matrix operations, echelon form, subspaces, special matrices, determinants, eigenvalues, linear operations`,
                `Complex numbers, complex geometry`,
                `Markov chains,  IO models`
            ])
        ),
        Entry(
            `STAT 270 - Probability & Statistics`,
            ``,
            `Covers topics about the fundamentals of probability and distributions, including:` +
            List([
                `Sample statistics, discrete/continuous population statistics`,
                `Definitions of probability, probability formulas, discrete/continuous functions`,
                `Distributions (binary, poisson, uniform, normal ,gamma, etc.), joint functions, sample inference`
            ])
        ),
        Entry(
            `MACM 316 - Numerical Analysis`,
            ``,
            `Covers topics about common problems in scientific and numerical computing, including:` +
            List([
                `Number systems and errors (floating-point precision, round-off error, etc.)`,
                `Nonlinear equation problems, gaussian elimination, eigenvalue problems`,
                `Interpolation, approximation, differentiation, block value problems`
            ])
        )
    ], SectionType.SMALL)
]);



document.getElementById("page-contact").innerHTML = page.contact;
document.getElementById("page-experience").innerHTML = page.experience;
document.getElementById("page-projects").innerHTML = page.projects;
document.getElementById("page-education").innerHTML = page.education;

document.getElementById("page-contact").style.display = `block`;
document.getElementById("page-experience").style.display = `none`;
document.getElementById("page-projects").style.display = `none`;
document.getElementById("page-education").style.display = `none`;

document.getElementById("link-contact").onclick = function() {
    document.getElementById("page-contact").style.display = `block`;
    document.getElementById("page-experience").style.display = `none`;
    document.getElementById("page-projects").style.display = `none`;
    document.getElementById("page-education").style.display = `none`;
    window.scrollTo(0,0)
};
document.getElementById("link-experience").onclick = function() {
    document.getElementById("page-contact").style.display = `none`;
    document.getElementById("page-experience").style.display = `block`;
    document.getElementById("page-projects").style.display = `none`;
    document.getElementById("page-education").style.display = `none`;
    window.scrollTo(0,0)
};
document.getElementById("link-projects").onclick = function() {
    document.getElementById("page-contact").style.display = `none`;
    document.getElementById("page-experience").style.display = `none`;
    document.getElementById("page-projects").style.display = `block`;
    document.getElementById("page-education").style.display = `none`;
    window.scrollTo(0,0)
};
document.getElementById("link-education").onclick = function() {
    document.getElementById("page-contact").style.display = `none`;
    document.getElementById("page-experience").style.display = `none`;
    document.getElementById("page-projects").style.display = `none`;
    document.getElementById("page-education").style.display = `block`;
    window.scrollTo(0,0)
};
/* =============================================
   COURSES DATA - ADEEB TECHNOLOGY LAB
   Bahawalpur: 21 Courses
   Islamabad: 13 Courses
   ============================================= */

const coursesData = [
    // ========================================
    // BAHAWALPUR CAMPUS — 21 COURSES
    // ========================================
    {
        id: 1,
        title: "Office Work (IT)",
        description: `IT
• computer knowledge
• Windows installation and settings
• Computer software and hardware basics
• Important shortcut keys

Office work
• Microsoft Word (documents & formatting)
• Microsoft Excel (tables, formulas, reports)
• Microsoft PowerPoint (presentations)
• Microsoft Publisher (design and layouts)`,
        category: "business",
        campus: "bahawalpur",
        duration: "4 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.9,
        students: 320,
        image: "assets/office.jpg",
        features: ["Live Projects", "Job Assistance", "Certificate"],
        hot: true
    },
    {
        id: 2,
        title: "Freelancing",
        description: `Tools:
• Upwork
• Fiverr
• Glass
• Facebook
• Instagram
• TikTok
• Google
• LinkedIn

Learn:
• Introduction to freelancing
• Creating professional profiles
• Finding clients and projects
• Communication with clients
• Project handling and delivery
• Basic skills for online work
• Earning and payment methods`,
        category: "business",
        campus: "bahawalpur",
        duration: "1 Month",
        oldPrice: 6500,
        newPrice: 4000,
        rating: 4.6,
        students: 450,
        image: "assets/freelanc.png",
        features: ["Profile Setup", "Client Communication", "Certificate"],
        hot: false
    },
    {
        id: 3,
        title: "Digital Marketing, Ads",
        description: `Tools:
• Google Ads (search & display advertising)
• Facebook & Instagram Ads Manager (social media advertising)
• Canva (ad graphics & creatives)
• Mailchimp (email marketing campaigns)
• Google Analytics (website & campaign tracking)

Learn:
• Introduction to digital marketing
• Social media marketing (Facebook, Instagram)
• Google Ads basics
• Creating and managing online ads
• Audience targeting and ad strategy
• Content marketing basics
• Analytics and performance tracking
• Increasing sales and online reach`,
        category: "marketing",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 7000,
        newPrice: 4500,
        rating: 4.6,
        students: 260,
        image: "assets/digital.png",
        features: ["Google Ads", "Social Media Ads", "Certificate"],
        hot: false
    },
    {
        id: 4,
        title: "Video Editing",
        description: `Tools:
• Adobe Premiere Pro
• CapCut
• Filmora
• Canva

Learn:
• Cutting, trimming, and merging videos
• Adding text, effects, and transitions
• Color correction and audio editing
• Creating YouTube videos, reels, and shorts`,
        category: "design",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 6500,
        newPrice: 4000,
        rating: 4.6,
        students: 300,
        image: "assets/video_edit.jpg",
        features: ["YouTube Videos", "Reels & Shorts", "Certificate"],
        hot: false
    },
    {
        id: 5,
        title: "Graphic Designer",
        description: `Tools:
• Adobe Photoshop
• Adobe Illustrator
• CorelDraw
• Canva

Learn:
• Logo, banner, and poster design
• Social media post and ad design
• Business cards, flyers, and brochures
• Color theory, typography, and layouts
• Creative design for digital and print media`,
        category: "design",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 7000,
        newPrice: 4500,
        rating: 4.7,
        students: 210,
        image: "assets/graphic.jpg",
        features: ["Logo & Branding", "Social Media Design", "Certificate"],
        hot: false
    },
    {
        id: 6,
        title: "E-Commerce",
        description: `Tools:
• Shopify (online store creation)
• WooCommerce (WordPress e-commerce plugin)
• PayPal & Bank (online payments)

Learn:
• Introduction to e-commerce
• Creating online stores
• Product listing and management
• Order processing and customer handling
• Online payment methods
• Facebook, Instagram, and website selling
• Basic digital marketing for e-commerce
• Growing and managing an online business`,
        category: "business",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 9500,
        newPrice: 7000,
        rating: 4.6,
        students: 180,
        image: "assets/ecommerce.png",
        features: ["Store Setup", "Product Management", "Certificate"],
        hot: false
    },
    {
        id: 7,
        title: "UX/UI Designing",
        description: `Tools:
• Figma
• Adobe XD

Learn:
• User experience (UX) principles
• User interface (UI) design
• Wireframing and prototyping
• Website and mobile app interface design
• User flow and responsive design
• Design systems and layouts`,
        category: "design",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.7,
        students: 220,
        image: "assets/uiux.png",
        features: ["Figma & XD", "Prototyping", "Certificate"],
        hot: false
    },
    {
        id: 8,
        title: "Youtuber Course",
        description: `Tools:
• Adobe Premiere Pro (video editing)
• Adobe After Effects (motion graphics & effects)
• Canva (thumbnails, banners, graphics)
• OBS Studio (screen recording & live streaming)
• TubeBuddy / VidIQ (YouTube SEO & analytics)
• Adobe Audition (audio editing)

Learn:
• Creating and managing a YouTube channel
• Video scripting and planning
• Shooting videos and live streaming
• Video editing and special effects
• Thumbnail and banner designing
• YouTube SEO and audience growth
• Monetization strategies`,
        category: "design",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 7000,
        newPrice: 4500,
        rating: 4.7,
        students: 220,
        image: "assets/youtube.png",
        features: ["YouTube SEO", "Thumbnails", "Certificate"],
        hot: false
    },
    {
        id: 9,
        title: "Home Architecture",
        description: `Tools:
• AutoCAD (2D & 3D architectural drawing)
• Chief Architect (3D architectural drawing)

Learn:
• Home architecture and design principles
• Floor plan creation and layout design
• 3D modeling and interior/exterior visualization
• Furniture, lighting, and material selection
• Rendering and creating realistic visuals
• Project presentation and client communication`,
        category: "design",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.6,
        students: 140,
        image: "assets/architecture.png",
        features: ["Floor Plans", "3D Visualization", "Certificate"],
        hot: false
    },
    {
        id: 10,
        title: "Web Development",
        description: `Tools:
• HTML, CSS, JavaScript (frontend development)
• WordPress and WIX
• Vercel (Deploy Free Website)
• MongoDB / MySQL (database management)
• Visual Studio Code (code editor)
• Git & GitHub (version control & collaboration)

Learn:
• Designing responsive and interactive websites
• Frontend and backend integration
• Database creation and management
• Hosting and deploying websites
• Domain and Subdomain Connection
• Website debugging and optimization
• Building real-world web projects`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 8500,
        newPrice: 6000,
        rating: 4.7,
        students: 260,
        image: "assets/webdev.png",
        features: ["Responsive Design", "Full-Stack Basics", "Certificate"],
        hot: false
    },
    {
        id: 11,
        title: "App Development",
        description: `Tools:
• Android Studio (native Android app development)
• Flutter (cross-platform app development)
• Firebase (backend & database management)
• Visual Studio Code (coding & debugging)

Learn:
• Designing user-friendly app interfaces
• Frontend and backend integration
• Database creation and management
• App testing and debugging
• Publishing apps on Google Play Store
• Real-world app project development`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 8500,
        newPrice: 6000,
        rating: 4.7,
        students: 190,
        image: "assets/appdev.png",
        features: ["Flutter/Android", "Play Store", "Certificate"],
        hot: false
    },
    {
        id: 12,
        title: "App Dev Without Coding",
        description: `Tools:
• Thunkable (drag-and-drop mobile app builder)
• Appy Pie (no-code app creation platform)
• Kodular (block-based Android app development)

Learn:
• Designing app interfaces without coding
• Adding functionality using drag-and-drop tools
• Database integration and app settings
• Testing apps on mobile devices
• Publishing apps on Google Play Store
• Creating real-world apps for business or personal use`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.5,
        students: 160,
        image: "assets/appdevwithout.png",
        features: ["Thunkable", "Appy Pie", "Certificate"],
        hot: false
    },
    {
        id: 13,
        title: "Web Dev Without Coding",
        description: `Tools:
• Wix (drag-and-drop website builder)
• WordPress (website creation with themes & plugins)
• Webflow (professional no-code web design)
• Elementor (WordPress page builder plugin)

Learn:
• Designing responsive websites without coding
• Adding pages, content, images, and videos
• Integrating forms, e-commerce, and payment options
• SEO basics and website optimization
• Publishing websites online
• Managing and updating live websites`,
        category: "development",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.5,
        students: 680,
        image: "assets/webdevwithout.png",
        features: ["Wix", "Elementor", "Certificate"],
        hot: false
    },
    {
        id: 14,
        title: "Cyber Security",
        description: `Tools:
• Kali Linux (penetration testing & ethical hacking)
• Wireshark (network monitoring & analysis)
• Metasploit (vulnerability testing)
• Nmap (network scanning)
• Burp Suite (web application security testing)
• VirtualBox / VMware (virtual lab setup)

Learn:
• Basics of cybersecurity and ethical hacking
• Network security and threat detection
• Website and application vulnerability testing
• Malware and virus protection
• Cyber attack prevention techniques
• Hands-on hacking labs in a safe environment`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 10500,
        newPrice: 8000,
        rating: 4.6,
        students: 160,
        image: "assets/cyber.png",
        features: ["Ethical Hacking", "Network Security", "Certificate"],
        hot: false
    },
    {
        id: 15,
        title: "Machine learning",
        description: `Tools:
• Python (programming language for ML)
• Jupyter Notebook (interactive coding environment)
• Scikit-learn (ML algorithms library)
• TensorFlow / Keras (deep learning frameworks)
• Google Colab (cloud-based coding & ML experiments)
• Pandas & NumPy (data processing and analysis)

Learn:
• Basics of machine learning and AI
• Supervised and unsupervised learning
• Data preprocessing and analysis
• Regression, classification, and clustering algorithms
• Building predictive models
• Real-world ML project development`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 9500,
        newPrice: 7000,
        rating: 4.5,
        students: 750,
        image: "assets/mechine.jpg",
        features: ["Python ML", "TensorFlow/Keras", "Certificate"],
        hot: false
    },
    {
        id: 16,
        title: "Internet of Thing [IOT]",
        description: `Tools:
• Arduino IDE (programming microcontrollers)
• Tinkercad
• Cirkitstudio
• Blynk (IoT) App
• Thunkable

Learn:
• IoT and connected devices
• Sensors, actuators, and hardware integration
• Data collection, analysis, and visualization
• IoT project design and implementation
• Connecting devices to cloud platforms
• Real-world IoT applications`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 10500,
        newPrice: 8000,
        rating: 4.8,
        students: 110,
        image: "assets/iot.jpg",
        features: ["Arduino", "Blynk IoT", "Certificate"],
        hot: false
    },
    {
        id: 17,
        title: "Programming",
        description: `Tools:
• Python (general-purpose programming & projects)
• C / C++ (fundamentals and problem-solving)
• Java (object-oriented programming & applications)
• Visual Studio Code (code editor for multiple languages)
• Code::Blocks / Dev C++ (C/C++ IDEs)
• PyCharm (Python IDE)

Learn:
• Basics of programming and logic building
• Data types, loops, and conditional statements
• Functions, arrays, and object-oriented programming
• Debugging and error handling
• Building simple projects and applications
• Preparing for advanced programming and software development`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 7000,
        newPrice: 4500,
        rating: 4.5,
        students: 290,
        image: "assets/prog.png",
        features: ["Python/Java/C++", "Projects", "Certificate"],
        hot: false
    },
    {
        id: 18,
        title: "Taxation",
        description: `Tools:
• Tally ERP / Tally Prime (accounting and GST management)
• QuickBooks (financial accounting and reporting)
• MS Excel (tax calculations and spreadsheets)
• Tax software (like ClearTax / TurboTax) (filing and compliance)

Learn:
• Basics of taxation and types of taxes
• Income tax filing for individuals and businesses
• GST registration and return filing
• Payroll and TDS management
• Tax planning and compliance
• Financial record keeping and reporting`,
        category: "business",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 10500,
        newPrice: 8000,
        rating: 4.6,
        students: 350,
        image: "assets/tax.png",
        features: ["Tax Filing", "GST", "Certificate"],
        hot: false
    },
    {
        id: 19,
        title: "Trading",
        description: `Platform:
• Mt5, Deriv Trading view

Topic:
• Types of trend & Tool
• Market Structure
• Supply Demand
• Order block Fvg
• Equal high & low
• Hidden zone + Breaker block
• Risk Management`,
        category: "business",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.6,
        students: 140,
        image: "assets/trading.png",
        features: ["Market Structure", "Risk Mgmt", "Certificate"],
        hot: false
    },
    {
        id: 20,
        title: "Truck Dispatching",
        description: `Tools:
• TruckStop.com / DAT Load Board (finding and managing loads)
• McLeod Software (transportation management)
• PC*MILER (route planning and mileage calculation)
• Excel / Google Sheets (tracking shipments and expenses)
• QuickBooks (billing and accounting)

Learn:
• Basics of trucking industry and logistics
• Dispatching procedures and load management
• Route planning and optimization
• Communication with drivers and clients
• Record keeping and financial management
• Real-world dispatching simulations`,
        category: "business",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: "—",
        newPrice: "Soon",
        rating: 4.5,
        students: 90,
        image: "assets/truck.png",
        features: ["Load Boards", "Logistics", "Certificate"],
        hot: false
    },
    {
        id: 21,
        title: "Software Development",
        description: `Tools:
• Java / C# / C++ (object-oriented programming & software projects)
• Visual Studio / VS Code (IDE for development)
• Git & GitHub (version control & collaboration)
• SQL / MySQL / MongoDB (database integration)
• Visual Basic

Learn:
• Basics of software development life cycle (SDLC)
• Writing clean and efficient code
• Frontend and backend integration
• Database creation and management
• Debugging, testing, and deployment
• Building real-world software projects`,
        category: "development",
        campus: "bahawalpur",
        duration: "3 Months",
        oldPrice: "—",
        newPrice: "Soon",
        rating: 4.7,
        students: 100,
        image: "assets/softwaredev.png",
        features: ["SDLC", "OOP", "Certificate"],
        hot: false
    },
    {
        id: 22,
        title: "SEO",
        description: `Tools:
• Google Search Console (website performance & indexing)
• Google Analytics (traffic analysis & reporting)
• Ahrefs / SEMrush (keyword research & competitor analysis)
• Ubersuggest (SEO research & ideas)
• Yoast SEO / Rank Math (on-page SEO for WordPress)
• Screaming Frog (technical SEO audits)

Learn:
• Basics of SEO and search engines
• Keyword research and content optimization
• On-page and off-page SEO techniques
• Technical SEO and website audits
• Link building strategies
• Improving website ranking and organic traffic`,
        category: "marketing",
        campus: "bahawalpur",
        duration: "2 Months",
        oldPrice: 7500,
        newPrice: 5000,
        rating: 4.7,
        students: 100,
        image: "assets/seo.png",
        features: ["Google Analytics", "On/Off Page", "Certificate"],
        hot: false
    },

    // ========================================
    // ISLAMABAD CAMPUS — 13 COURSES
    // ========================================
    {
        id: 23,
        title: "Freelancing",
        description: `Tools:
• Upwork
• Fiverr
• Glass
• Facebook
• Instagram
• TikTok
• Google
• LinkedIn

Learn:
• Introduction to freelancing
• Creating professional profiles
• Finding clients and projects
• Communication with clients
• Project handling and delivery
• Basic skills for online work
• Earning and payment methods`,
        category: "business",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 240,
        image: "assets/freelanc.png",
        features: ["Profile Setup", "Client Communication", "Certificate"],
        hot: true
    },
    {
        id: 24,
        title: "Video Editing",
        description: `Tools:
• Adobe Premiere Pro
• CapCut
• Filmora
• Canva

Learn:
• Cutting, trimming, and merging videos
• Adding text, effects, and transitions
• Color correction and audio editing
• Creating YouTube videos, reels, and shorts`,
        category: "design",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 120,
        image: "assets/video_edit.jpg",
        features: ["Premiere Pro", "CapCut", "Certificate"],
        hot: true
    },
    {
        id: 25,
        title: "E-Commerce",
        description: `Tools:
• Shopify (online store creation)
• WooCommerce (WordPress e-commerce plugin)
• PayPal & Bank (online payments)

Learn:
• Introduction to e-commerce
• Creating online stores
• Product listing and management
• Order processing and customer handling
• Online payment methods
• Facebook, Instagram, and website selling
• Basic digital marketing for e-commerce
• Growing and managing an online business`,
        category: "business",
        campus: "islamabad",
        duration: "3 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 100,
        image: "assets/ecommerce.png",
        features: ["Shopify", "Store Management", "Certificate"],
        hot: true
    },
    {
        id: 26,
        title: "Office Work (IT)",
        description: `IT:
• Computer knowledge
• Windows installation and settings
• Computer software and hardware basics
• Important shortcut keys

Office work:
• Microsoft Word (documents & formatting)
• Microsoft Excel (tables, formulas, reports)
• Microsoft PowerPoint (presentations)
• Microsoft Publisher (design and layouts)`,
        category: "business",
        campus: "islamabad",
        duration: "4 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 130,
        image: "assets/office.jpg",
        features: ["MS Office", "Computer Basics", "Certificate"],
        hot: false
    },
    {
        id: 27,
        title: "UX/UI Designing",
        description: `Tools:
• Figma
• Adobe XD

Learn:
• User experience (UX) principles
• User interface (UI) design
• Wireframing and prototyping
• Website and mobile app interface design
• User flow and responsive design
• Design systems and layouts`,
        category: "design",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 90,
        image: "assets/uiux.png",
        features: ["Figma", "Adobe XD", "Certificate"],
        hot: false
    },
    {
        id: 28,
        title: "Graphic Designing",
        description: `Tools:
• Adobe Photoshop
• Adobe Illustrator
• Canva

Learn:
• Introduction to graphic designing
• Logo design
• Social media posts and banners
• Business cards and flyers
• Image editing and manipulation
• Color theory and typography
• Design for print and digital media`,
        category: "design",
        campus: "islamabad",
        duration: "3 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.7,
        students: 160,
        image: "assets/graphic.jpg",
        features: ["Photoshop", "Illustrator", "Certificate"],
        hot: false
    },
    {
        id: 29,
        title: "Web Development",
        description: `Tools:
• HTML
• CSS
• JavaScript
• Bootstrap

Learn:
• Website structure and layout
• Responsive web design
• Creating static websites
• Basic website hosting and deployment
• Forms and user interaction
• Introduction to web projects`,
        category: "development",
        campus: "islamabad",
        duration: "4 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.8,
        students: 140,
        image: "assets/webdev.png",
        features: ["HTML/CSS/JS", "Responsive", "Certificate"],
        hot: false
    },
    {
        id: 30,
        title: "WordPress Development",
        description: `Tools:
• WordPress
• Elementor
• Themes & Plugins

Learn:
• Creating websites using WordPress
• Theme installation and customization
• Plugin management
• Creating business and portfolio websites
• Website backup and security
• Basic SEO for WordPress`,
        category: "development",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.7,
        students: 200,
        image: "assets/webdevwithout.png",
        features: ["WordPress", "Elementor", "Certificate"],
        hot: false
    },
    {
        id: 31,
        title: "Digital Marketing",
        description: `Tools:
• Facebook Ads
• Instagram Marketing
• Google Ads
• Canva

Learn:
• Introduction to digital marketing
• Social media marketing
• Running paid ads
• Content creation strategy
• Audience targeting
• Marketing analytics and performance tracking`,
        category: "marketing",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.7,
        students: 80,
        image: "assets/digital.png",
        features: ["Social Ads", "Google Ads", "Certificate"],
        hot: false
    },
    {
        id: 32,
        title: "Basic Computer Course",
        description: `Learn:
• Computer introduction
• Windows basics
• File and folder management
• Internet usage
• Email creation and usage
• Basic typing skills
• Introduction to MS Office`,
        category: "business",
        campus: "islamabad",
        duration: "2 Months",
        oldPrice: 5500,
        newPrice: 3000,
        rating: 4.7,
        students: 180,
        image: "assets/office.jpg",
        features: ["Computer Basics", "Internet", "Certificate"],
        hot: false
    },
];

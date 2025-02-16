const projects = [
  {
    id: 1,
    title: "BTS On to go",
    image_path: "images/bts-on-to-go/image.png",
    short_description:
      "Search for nearby attractions near BTS Skytrain stations to enhance the exploration experience in Bangkok",
    description:
      "This Android application offers users the convenient functionality to search for nearby attractions in proximity to BTS Skytrain stations, enhancing their exploration experience. Not only does it provide information on the attractions themselves, but it also guides users on which specific station they should embark and disembark from, streamlining their travel planning process. Additionally, the app presents pricing details and estimated travel times, enabling users to make informed decisions about their itinerary and budget management while exploring the vibrant cityscape of Bangkok.",
    type: "personal",
    screenshots: [
      "images/bts-on-to-go/screenshot-1.png",
      "images/bts-on-to-go/screenshot-2.png",
      "images/bts-on-to-go/screenshot-3.png",
      "images/bts-on-to-go/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "September 2015",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Java, Dagger2, RxJava, Butterknife, Firebase Realtime Database, Firebase Storage, Google Map, and Google AdMob",
  },
  {
    id: 2,
    title: "Medicine Alert",
    image_path: "images/medicine-alert/image.png",
    short_description:
      "Remind the user to take their pill to help them stay on track with their medication schedule",
    description:
      "This application, specifically tailored for Android devices, offers users a comprehensive pill reminder feature designed to ensure they never miss taking their medication. With this intuitive functionality, users can easily set up personalized reminders for each medication, helping them stay on track with their treatment regimen and promoting better health management. From daily vitamins to prescription medications, this app empowers users to manage their pill schedule efficiently, providing peace of mind and enhancing overall well-being.",
    type: "personal",
    screenshots: [
      "images/medicine-alert/screenshot-1.png",
      "images/medicine-alert/screenshot-2.png",
      "images/medicine-alert/screenshot-3.png",
      "images/medicine-alert/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "January 2016",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Kotlin, Dagger2, RxJava, Firebase Storage, Firebase Crashlytics, StorIO, and Google AdMob",
  },
  {
    id: 3,
    title: "Simoorgh Tennis",
    image_path: "images/simoorgh-tennis/image.png",
    short_description: "Book a tennis court at Simoorgh Tennis Academy Bangkok",
    description:
      "This application, specifically designed for Android devices, offers users the convenient capability to book tennis sessions at Simoorgh Tennis Academy Bangkok. Whether you're a seasoned player or just starting out, our user-friendly interface allows you to easily browse available time slots, select your preferred court, and secure your reservation with just a few taps. With our intuitive booking system, managing your tennis activities has never been simpler. Experience the ease and efficiency of organizing your tennis sessions with our app, designed to enhance your experience at Simoorgh Tennis Academy Bangkok.",
    type: "personal",
    screenshots: [
      "images/simoorgh-tennis/screenshot-1.png",
      "images/simoorgh-tennis/screenshot-2.png",
      "images/simoorgh-tennis/screenshot-3.png",
      "images/simoorgh-tennis/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "June 2017",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Java, Dagger2, RxJava, Retrofit, OkHttp, Butterknife, Firebase Authentication, Firebase Realtime Database, Firebase Cloud Messaging, Firebase Storage, and Google AdMob",
  },
  {
    id: 4,
    title: "Money Tracker",
    image_path: "images/money-tracker/image.png",
    short_description:
      "Record transactions, track spending behavior, set budgets, and gain insights into their financial health",
    description:
      "This application is designed for Android devices, serves as a comprehensive financial management tool, empowering users to efficiently record their financial transactions and gain valuable insights into their spending behavior. With its intuitive interface and robust features, users can easily track their income, expenses, and savings, thereby enabling better financial planning and decision-making. Through this app, users can conveniently log all their financial activities, including purchases, bill payments, income sources, and more, ensuring a detailed and accurate record of their financial transactions. Additionally, the app offers categorization options, allowing users to classify their expenses into different categories such as accommodation, bill, food, and others, facilitating a clearer understanding of their spending habits.",
    type: "personal",
    screenshots: [
      "images/money-tracker/screenshot-1.png",
      "images/money-tracker/screenshot-2.png",
      "images/money-tracker/screenshot-3.png",
      "images/money-tracker/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "June 2018",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Flutter, Bloc (State Management), Firebase Authentication, Firebase Realtime Database, Firebase Storage, Firebase Crashlytics, Floor (SQLite), and Google AdMob",
    link: "https://play.google.com/store/apps/details?id=com.kvsoftware.moneytracker",
  },
  {
    id: 5,
    title: "Air Pollution Checker",
    image_path: "images/air-pollution-checker/image.png",
    short_description:
      "Monitor real-time air quality levels by using data from the World Air Quality Index",
    description:
      "This application is designed for Android devices, providing users with the capability to monitor air quality levels at their current location or any desired place. Utilizing data sourced from the World Air Quality Index (https://waqi.info/), the app offers a reliable and comprehensive overview of air quality parameters. With this app, users gain valuable insights into air pollution levels, enabling them to make informed decisions about their activities and health. Whether planning outdoor events, exercising, or simply concerned about air quality in their vicinity, users can rely on accurate and up-to-date information provided by the World Air Quality Index database.",
    type: "personal",
    screenshots: [
      "images/air-pollution-checker/screenshot-1.png",
      "images/air-pollution-checker/screenshot-2.png",
      "images/air-pollution-checker/screenshot-3.png",
      "images/air-pollution-checker/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "September 2019",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Kotlin, Hilt, Coroutines, RxJava, Retrofit, OkHttp, Firebase Storage, Firebase Crashlytics, Google Analytics, and Google AdMob",
    link: "https://play.google.com/store/apps/details?id=com.kvsoftware.airpollution",
  },
  {
    id: 41,
    title: "Siam Piwat - Indoor Map SDK",
    image_path: "images/siam-piwat/image.png",
    short_description:
      "An SDK provides indoor maps, navigation, and store listings for popular Bangkok malls",
    description:
      "This SDK integrates the MappedIn SDK for Android to provide navigation features. The user interface is fully customized by the SDK to enhance the shopping experience. It includes a curated list of stores in popular malls across Bangkok, such as Siam Center, Siam Discovery, Siam Paragon, and Iconsiam. Users can easily navigate these malls with an intuitive and user-friendly design. The SDK ensures accurate and up-to-date store information for a seamless experience.",
    type: "professional",
    screenshots: [
      "images/siam-piwat/screenshot-1.png",
      "images/siam-piwat/screenshot-2.png",
      "images/siam-piwat/screenshot-3.png",
      "images/siam-piwat/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "June 2020",
    my_role: "Designed and developed the initial release of the SDK.",
    technologies: "Kotlin, Dagger2, RxJava, Retrofit, OkHttp, and MappedIn SDK",
  },
  {
    id: 42,
    title: "evRiderz",
    image_path: "images/evriderz/image.png",
    short_description:
      "A ride hailing service provides eco-friendly transportation solutions using electric vehicles",
    description:
      "The evRiderz application provides eco-friendly transportation services using electric vehicles. It allows users to book rides for ride-hailing, request food deliveries, and manage fleets of electric vehicles. The app aims to reduce emissions and promote sustainability by offering green alternatives for everyday transportation. It also supports features like battery swapping for electric vehicles, making the transition to electric mobility more convenient.",
    type: "professional",
    screenshots: [
      "images/evriderz/screenshot-1.png",
      "images/evriderz/screenshot-2.png",
      "images/evriderz/screenshot-3.png",
      "images/evriderz/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "August 2020",
    my_role:
      "Designed and developed the initial release of the applications for both Riderz and Driverz.",
    technologies:
      "Kotlin, Hilt, Coroutines, RxJava, Retrofit, OkHttp, Socket, Firebase Messaging, Firebase Crashlytics, Google Analytics, and 2C2P Payment.",
  },
  {
    id: 43,
    title: "DAIKIN Mobile Controller",
    image_path: "images/daikin/image.png",
    short_description: "An application to remotely control Daikin IoT devices",
    description:
      "This application is designed for Android devices and provides functions to control Daikin air conditioners and air purifiers. It supports basic operations such as power control, operation mode, temperature adjustment, fan speed, fan swing, and fan flap. Additionally, it offers advanced features, including grouped operation, a weekly timer, vacation mode, and child lock.",
    type: "professional",
    screenshots: [
      "images/daikin/screenshot-1.png",
      "images/daikin/screenshot-2.png",
      "images/daikin/screenshot-3.png",
      "images/daikin/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "March 2022",
    my_role:
      "Upgraded and modified the application to support account management, connect to new device models, and ensure compatibility with all existing models.",
    technologies: "Java, Kotlin",
    link: "https://play.google.com/store/apps/details?id=ao.daikin.remoapp",
  },
  {
    id: 44,
    title: "Foodie 24x7",
    image_path: "images/foodie/image.png",
    short_description:
      "An omni-channel platform that helps restaurants manage online orders, loyalty programs, and delivery services",
    description:
      "The Foodie24x7 application enables restaurants to manage online orders, loyalty programs, and delivery services. It integrates with social media platforms like Facebook and Instagram for streamlined ordering. The app offers tools for payment processing and automated logistics management. It also includes features for building customer engagement through rewards programs. Restaurants can track and analyze customer data to optimize their services.",
    type: "professional",
    screenshots: [
      "images/foodie/screenshot-1.png",
      "images/foodie/screenshot-2.png",
      "images/foodie/screenshot-3.png",
      "images/foodie/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "July 2022",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Flutter, Bloc (State Management), dio, Firebase Messaging, Firebase Crashlytics, Google Analytic",
  },
  {
    id: 45,
    title: "Angel Investment Network",
    image_path: "images/ain/image.png",
    short_description:
      "A networking application that connects entrepreneurs with investors worldwide",
    description:
      "The Angel Investment Network app helps investors connect with global startup opportunities. It allows users to browse a wide range of deals, filter by preferences like industry and investment amount, and communicate directly with entrepreneurs. Investors can also manage their portfolios and track investments through the app. Entrepreneurs seeking funding can create pitches on the main website, while the app is designed to streamline the investment process. This platform simplifies the connection between startups and investors for efficient funding opportunities.",
    type: "professional",
    screenshots: [
      "images/ain/screenshot-1.png",
      "images/ain/screenshot-2.png",
      "images/ain/screenshot-3.png",
      "images/ain/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "September 2022",
    my_role: "Designed and developed the initial release of the application.",
    technologies:
      "Flutter, Bloc (State Management), dio, Firebase Messaging, Firebase Crashlytics, Google Analytic, and Branch.io",
    link: "https://play.google.com/store/apps/details?id=uk.co.angelinvestmentnetwork",
  },
  {
    id: 46,
    title: "Just Car",
    image_path: "images/just-car/image.png",
    short_description:
      "An app for buying, selling, and financing inspected used cars",
    description:
      "JUST CAR's mobile app is a seamless platform for buying and selling used cars in Thailand. Sellers can list their vehicles easily and get the best price through professional appraisals. Buyers can browse a wide range of inspected cars, complete with over 200-point quality checks and warranty options. The app provides financing solutions, making car ownership more accessible. Users can also schedule test drives, track their transactions, and receive customer support within the app. With a user-friendly interface and secure transactions, JUST CAR ensures a hassle-free experience for all car buyers and sellers.",
    type: "professional",
    screenshots: [
      "images/just-car/screenshot-1.png",
      "images/just-car/screenshot-2.png",
      "images/just-car/screenshot-3.png",
      "images/just-car/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "February 2023",
    my_role:
      "Designed and implemented a new feature, improving system functionality and user experience.",
    technologies:
      "Flutter, GetX (State Management), dio, Firebase Messaging, Firebase Crashlytics, Google Analytic",
  },
  {
    id: 47,
    title: "El Mercado - Back Office",
    image_path: "images/el-mercado/image.png",
    short_description: "A back office web application for restaurant",
    description:
      "The back office web application for a restaurant focuses on managing reservations, customer orders, and inventory. It simplifies the tracking of food and beverage stock levels to ensure proper supply management. The platform allows for easy menu updates, enabling staff to reflect changes in real-time. It supports the seamless coordination of daily operations, providing essential tools for efficient restaurant management. This solution enhances operational efficiency and ensures smooth service delivery.",
    type: "professional",
    screenshots: [
      "images/el-mercado/screenshot-1.png",
      "images/el-mercado/screenshot-2.png",
      "images/el-mercado/screenshot-3.png",
      "images/el-mercado/screenshot-4.png",
    ],
    screenshots_column: 2,
    date: "June 2023",
    my_role:
      "Designed and implemented a new feature, improving system functionality and user experience.",
    technologies: "Next.js, Tailwind CSS, Prisma, and PostgreSQL",
    link: "https://app.elmercadobangkok.com/admin/sign-in",
  },
  {
    id: 48,
    title: "Dasta",
    image_path: "images/dasta/image.png",
    short_description:
      "A community web application connecting entrepreneurs, tourists, and local development",
    description:
      "This web application serve as a community database that allows entrepreneurs and general tourists to search for information, facilitating long-term grassroots economic development planning. Entrepreneurs can more easily find communities with potential, while communities can utilize technology systems to manage their benefits effectively.",
    type: "professional",
    screenshots: [
      "images/dasta/screenshot-1.png",
      "images/dasta/screenshot-2.png",
      "images/dasta/screenshot-3.png",
      "images/dasta/screenshot-4.png",
    ],
    screenshots_column: 2,
    date: "September 2023",
    my_role:
      "Designed and implemented a new feature, improving system functionality and user experience.",
    technologies: "Next.js, Tailwind CSS, and Prisma",
    link: "https://smartcbt.dasta.or.th/login",
  },
  {
    id: 49,
    title: "Supernature - Back Office",
    image_path: "images/super-nature/image.png",
    short_description:
      "A back office web application for organizing group tours",
    description:
      "The back office web application for Supernature Travel is designed to streamline operations, from managing customer bookings and communication to creating and scheduling customized group tours. It integrates supplier and partner management, ensuring smooth collaboration and financial tracking, including budgeting and invoicing. The platform includes tools for tour creation, pricing, and scheduling, enabling efficient tour management. With robust reporting and analytics features, the app provides insights into performance and customer behavior. This solution enhances operational efficiency and supports Supernature Travel's commitment to providing exceptional travel experiences.",
    type: "professional",
    screenshots: [
      "images/super-nature/screenshot-1.png",
      "images/super-nature/screenshot-2.png",
      "images/super-nature/screenshot-3.png",
      "images/super-nature/screenshot-4.png",
    ],
    screenshots_column: 2,
    date: "January 2024",
    my_role:
      "Fixed bugs and improved features in the back office system for a group tour organization, enhancing stability, performance, and user experience.",
    technologies: "Vue.js, Node.js, and MySQL",
    link: "https://app.supernature.travel",
  },
  {
    id: 50,
    title: "Sale Here - Image Editing Kit SDK",
    image_path: "images/sale-here/image.png",
    short_description: "A modular framework for image editing",
    description:
      "This SDK is a modular framework that integrates with the backend office to retrieve templates and supports various image editing features within host applications. It allows users to browse photos, perform image adjustments, add decorations, and access history, enabling them to undo or redo actions.",
    type: "professional",
    screenshots: [
      "images/sale-here/screenshot-1.png",
      "images/sale-here/screenshot-2.png",
      "images/sale-here/screenshot-3.png",
      "images/sale-here/screenshot-4.png",
    ],
    screenshots_column: 4,
    date: "June 2024",
    my_role: "Designed and programmed the initial release of the SDK.",
    technologies:
      "Kotlin, Hilt, Coroutines, RxJava, Retrofit, OkHttp, Firebase Crashlytics, and Google Analytics",
  },
];

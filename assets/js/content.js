var CONTENT = {
    'en': {
        sidebar: {
            about_me      : 'About Me',
            my_works      : 'My Works',
            what_i_know   : 'What I Know',
            my_experience : 'My Experience',
            contact_me    : 'Contact Me',
            switch_lang   : '切換語言',
            my_slides     : 'My Slides',
            target_lang   : 'zh-tw',
            back_to_top   : 'Back To Top'
        },
        about_me: {
            quote: 'Also known as Jing Bo Yen. Is a developer and traveler.',
            learn_more : 'Learn more',
            visit_blog : 'Visit my blog'
        },
        my_works_section: {
            work_list: [
                {
                  img_src   : 'images/works/cloudmun_gsl.png',
                  title     : 'CloudMUN - The Next Generation Cloud-based Model United Nations Conference System',
                  text      : 'I started this project since 2015 to develop a professional MUN conference WebApp featuring Google Docs like realtime syncing. Currently I worked with serveral friends to provide service to MUN conferences.',
                  enabled   : true,
                  buttons   : [
                      {
                          link_text : 'CloudMUN',
                          link_to   : 'https://cloudmun.com.tw'
                      },
					  {
						  link_text : 'Facebook',
						  link_to   : 'https://www.facebook.com/cloudmun.com.tw'
					  }
                  ]
                },
                {
                    img_src   : 'images/works/sensortag-websocket.png',
                    title     : 'IoT made easy: RPi, Sensortag, Websocket with Node.js',
                    text      : 'My talk at SITCON x HK @ CityU. Introducing how Raspberry Pi 3 can connect to a TI sensortag via bluetooth by Node.js. And how to stream real time data to the browser using Websocket.',
                    enabled   : true,
                    buttons   : [
                        {
                            link_text : 'SITCON x HK',
                            link_to   : 'http://hk.sitcon.org/2016/#!/topic/IoT'
                        },
                        {
                            link_text : 'Github',
                            link_to   : 'https://github.com/jeremy5189/Sensortag-Websocket'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/paywhich_icon_gray.png',
                    title     : 'PayWhich WebApp',
                    text      : 'Taiwan credit card foreign transaction fee calculator. Automatically retrieve official currency exchange rate from MasterCard, VISA and JCB',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://paywhich.pw',
                            link_text : 'Link to PayWhich'
                        },
                        {
                            link_text : 'Github',
                            link_to   : 'https://github.com/jeremy5189/PayWhich'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/hahow-backend.png',
                    title     : 'Laravel Backend Web Development for Beginner (Online Video Course)',
                    text      : 'Achieved over 250 student signup for this online video course within 30 days.',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'https://hahow.in/cr/laravel-backend',
                            link_text : 'View course page'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/hahow-frontend.png',
                    title     : 'Frontend Web Development for Beginner (Online Video Course)',
                    text      : 'Achieved 350 (Over 1000% of initial estimation) student signup for this online video course within 30 days.',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'https://hahow.in/cr/frontend-web-starter',
                            link_text : 'View course page'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/ntust-lost.png',
                    title     : 'NTUST Lost and Found System',
                    text      : 'Development started around 2013, got online around 2014. Now served as the official lost and found system in the NTUST and maintained by the Student Affairs Office',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://lost.ntust.edu.tw',
                            link_text : 'Visit system'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/bi_charts.jpg',
                    title     : 'Billows Security Portal / Log Master',
                    text      : 'Company product, see website for more detail.',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://billows.com.tw/',
                            link_text : 'Product details'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/ntust-patent.png',
                    title     : 'NTUST Interactive Seat Selection System',
                    text      : 'This is a temperary activity site for NTUST Collage of IP. Providing interactive conference room seats selection for attendees.',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'javascript:void(0);',
                            link_text : 'Site offline'
                        }
                    ]
                }
            ]
        },
        what_i_know: {
            what_i_know: 'What I Know',
            text: 'I\'m a backend web developer. The following figure is a brief summary of my skills.',
            skills: [
                {
                    icon  : 'code',
                    title : 'PHP / Laravel',
                    text  : 'Five years of native PHP experience, one and a half year of Laravel framework experience.'
                },
                {
                    icon  : 'codepen',
                    title : 'Node.js',
                    text  : 'Two years of Node.js experience, both backend development (Express.js, Sails.js) and data analysis.'
                },
                {
                    icon  : 'code-fork',
                    title : 'Git',
                    text  : 'Four years of git version control experience. Collaborating with three commerical team up to ten developer.'
                },
                {
                    icon  : 'terminal',
                    title : 'Ubuntu Server / Amazon AWS',
                    text  : 'Four years of Ubuntu Server and CentOS experience. Building and maintaining multi-purpose server on Amazon EC2.'
                },
                {
                    icon  : 'desktop',
                    title : 'Frontend',
                    text  : 'HTML, CSS, Native JS, jQuery, Highcharts, Bootstrap, Vue.js'
                },
                {
                    icon  : 'chain',
                    title : 'Other',
                    text  : 'Python, MySQL, ElasticSearch, Network administration, C/C++, Java, VB.Net, C#.Net, English (C1), Deutsch(A1.1)'
                }
            ]
        },
        my_experince_section: {
            experiences: [
                {
                    title : 'Taipei, Taiwan; KPMG Taiwan IT Advisory in Management & Risk Consulting, Intern Researcher',
                    date  : '2016.9 ~ Present',
                    text  : 'Current work',
                    link  : 'https://home.kpmg.com/tw/zh/home.html',
                    link_text : 'KPMG Taiwan'
                },
                {
                    title : 'Cologne, Germany; Technical University of Cologne (TH Köln), Exchange Student',
                    date  : '2016.3 - 2016.8',
                    text  : 'Major: International Business',
                    link  : 'https://www.th-koeln.de/',
                    link_text : 'Visit TH Köln'
                },
                {
                    title : 'Taipei, Taiwan; Billows Technology Co., Ltd, Full Stack Developer',
                    date  : '2015.5 - 2016.2',
                    text  : '- Maintain existing products with native PHP and ElasticSearch. <br/>- Develop new product with Laravel. <br/>- Maintaining serveral ESXi VM host and client',
                    link  : 'http://billows.com.tw/',
                    link_text : 'Visit Billows'
                },
                {
                    title : 'Taipei, Taiwan; PyPAT IP Services, System Administrator',
                    date  : '2015.9 - 2016.1',
                    text  : '- Develop tools to extract and process big amount of patent data using Node.js and Python. <br/>- Build and administrate several ElasticSearch server on Amazon EC2.',
                    link  : 'http://pypat.com/',
                    link_text : 'Visit PyPAT'
                },
                {
                    title : 'Taipei, Taiwan; Hacks in Taiwan Conference (HITCON) 2015 - 2016, Interpreter',
                    date  : '2015.8 / 2016.12',
                    text  : 'Provide simultaneous interpreting for both English and Chinese.',
                    link  : 'https://hitcon.org/2015/',
                    link_text : 'Visit HITCON'
                },
                {
                    title : 'New York, U.S.; National Model United Nations (NMUN) 2015, Head of NTUST delegation',
                    date  : '2015.3.29 - 4.2',
                    text  : 'As the head of NTUST delegation to NMUN 2015, I\'m responsible for both academic training and administration affairs.',
                    link  : 'http://www.nmun.org/nmun_ny.html',
                    link_text : 'Visit NMUN'
                },
                {
                    title : 'Tokushima, Japan; University of Tokushima, Visiting Student',
                    date  : '2014.8.1 - 8.11',
                    text  : 'I was recommended by the office of International affairs office of NTUST to visit the University of Tokushima in Japan for two weeks.',
                    link  : 'http://www.tokushima-u.ac.jp/english/',
                    link_text: 'Visit Tokushima-U'
                },
                {
                    title : 'Taipei, Students\' Information Technology Conference (STICON), Agenda Committee',
                    date  : '2014 - 2016',
                    text  : 'The founding purpose and goal of SITCON is to provide a platform for students who are interested in IT to speak and promote their work. Therefore, the Agenda Committee have done our best job to pick and select every outstanding paper which we had received.',
                    link  : 'http://sitcon.org/',
                    link_text : 'Visit STICON'
                }
            ]
        }
    },
    'zh-tw': {
        sidebar: {
            about_me      : '關於我',
            my_works      : '作品集',
            what_i_know   : '專業技能',
            my_experience : '經歷',
            contact_me    : '聯絡我',
            switch_lang   : 'English',
            my_slides     : '簡報',
            target_lang   : 'en',
            back_to_top   : '返回頁首'
        },
        about_me: {
            quote: 'Also known as Jing Bo Yen. Is a developer and traveller.',
            learn_more : '繼續閱讀',
            visit_blog : '部落格'
        },
        my_works_section: {
            work_list: [
                {
                  img_src   : 'images/works/cloudmun_gsl.png',
                  title     : 'CloudMUN - 雲端模聯會議系統',
                  text      : '2015 年初我獨自開始開發，目標是做一個擁有 Google 文件即時同步功能的專業會議系統。目前我和幾位朋友一同營運和維護 CloudMUN，對許多舉辦會議的組織和客戶提供專業服務。',
                  enabled   : true,
                  buttons   : [
                      {
                          link_text : 'CloudMUN',
                          link_to   : 'https://cloudmun.com.tw/zh/'
                      },
					  {
						  link_text : 'Facebook',
						  link_to   : 'https://www.facebook.com/cloudmun.com.tw'
					  }
                  ]
                },
                {
                    img_src   : 'images/works/sensortag-websocket.png',
                    title     : 'IoT made easy: RPi, Sensortag, Websocket with Node.js',
                    text      : '擔任 SITCON x HK @ 香港城市大學講者。介紹 IoT, BLE 並示範如何使用 Raspberry Pi 3 藍芽連接至 TI Sensortag 然後將感測器資料利用 WebSocket 即時送至前端。',
                    enabled   : true,
                    buttons   : [
                        {
                            link_text : 'SITCON x HK',
                            link_to   : 'http://hk.sitcon.org/2016/#!/topic/IoT'
                        },
                        {
                            link_text : 'Github',
                            link_to   : 'https://github.com/jeremy5189/Sensortag-Websocket'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/paywhich_icon_gray.png',
                    title     : 'PayWhich WebApp',
                    text      : 'PayWhich 是您在國外使用台灣信用卡的好幫手。PayWhich 會自動取得最新的 VISA / Master / JCB 之匯率，同時儲存您所輸入的信用卡基本資料。並幫助您在結帳時，根據最新國際組織匯率換算，幫助您在多張信用卡中選擇一張最划算的卡片。',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://paywhich.pw',
                            link_text : '前往 PayWhich'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/hahow-backend.png',
                    title     : 'Hahow Laravel 5.3 後端網站設計入門課程講師',
                    text      : '線上課程募資開始後 10 天即達標，募資結束後募得 300 位學生，目前已順利開課',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'https://hahow.in/cr/laravel-backend',
                            link_text : '檢視課程頁面'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/hahow-frontend.png',
                    title     : 'Hahow 前端網頁設計入門課程講師',
                    text      : '線上課程開課募資一個月內達標 1000%，目前已順利開課，同學反應及討論非常熱烈',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'https://hahow.in/cr/frontend-web-starter',
                            link_text : '檢視課程頁面'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/ntust-lost.png',
                    title     : '臺灣科技大學失物招領系統',
                    text      : '2013 年底開始開發，2014 年中正式上線，目前是臺科大官方遺失物招領系統，由學務處負責日常更新',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://lost.ntust.edu.tw',
                            link_text : '前往系統'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/bi_charts.jpg',
                    title     : '竣盟科技 Security Portal / Log Master',
                    text      : '任職於竣盟科技時所負責的產品，細節請參考公司網站',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'http://billows.com.tw/',
                            link_text : '前往公司網站'
                        }
                    ]
                },
                {
                    img_src   : 'images/works/ntust-patent.png',
                    title     : '臺灣科技大學專利所互動選位系統',
                    text      : '由臺科大專利所委託製作之研討會報名選位系統，能快速處理研討會報名及加速對帳流程，並提供參加者互動式選擇會議廳座位之功能',
                    enabled   : true,
                    buttons   : [
                        {
                            link_to   : 'javascript:void(0)',
                            link_text : '網站暫時離線'
                        }
                    ]
                }
            ]
        },
        what_i_know: {
            what_i_know: '專業技能',
            text: '我的專長是網頁後端設計師，但也掌握一些前端技能，以下是我的技能樹',
            skills: [
                {
                    icon  : 'code',
                    title : 'PHP / Laravel',
                    text  : '五年 Native PHP 開發經驗，一年半 Laravel 開發經驗'
                },
                {
                    icon  : 'codepen',
                    title : 'Node.js',
                    text  : '兩年 Node.js 開發經驗，曾使用 Sails.js, Express.js 開發網頁後端，也曾使用 Node.js 做數據分析'
                },
                {
                    icon  : 'code-fork',
                    title : 'Git',
                    text  : '四年 Git 版本控制經驗，曾與三個商業團隊、十個以上的開發者一同協作專案'
                },
                {
                    icon  : 'terminal',
                    title : 'Ubuntu Server / Amazon AWS',
                    text  : '四年 Ubuntu Server 及 CentOS 管理經驗，包括使用 Amazon EC2 建置並管理伺服器'
                },
                {
                    icon  : 'desktop',
                    title : 'Frontend',
                    text  : 'HTML, CSS, Native JS, jQuery, Highcharts, Bootstrap, Vue.js'
                },
                {
                    icon  : 'chain',
                    title : 'Other',
                    text  : 'Python, MySQL, ElasticSearch, Network administration, C/C++, Java, VB.Net, C#.Net, English (C1), Deutsch(A1.1)'
                }
            ]
        },
        my_experince_section: {
            experiences: [
                {
                    title : 'KPMG 資訊科技諮詢服務 實習研究員',
                    date  : '2016.9 ~ Present',
                    text  : '現職',
                    link  : 'https://home.kpmg.com/tw/zh/home.html',
                    link_text : 'KPMG Taiwan'
                },
                {
                    title : '德國科隆科技大學 交換學生',
                    date  : '2016.3 - 2016.8',
                    text  : '主修國際企業',
                    link  : 'https://www.th-koeln.de/',
                    link_text : '科隆科技大學網站'
                },
                {
                    title : '台北竣盟科技股份有限公司 全端網頁工程師',
                    date  : '2015.5 - 2016.2',
                    text  : '- 使用 Native PHP 及 ElasticSearch 維護公司產品 <br/>- 使用 Laravel 開發新產品 <br/>- 維護並管理 ESXi 虛擬機',
                    link  : 'http://billows.com.tw/',
                    link_text : 'Billows 公司介紹'
                },
                {
                    title : '台北桂桂科技(PyPAT)有限公司 數據分析及系統管理',
                    date  : '2015.9 - 2016.1',
                    text  : '- 使用 Node.js 取得及處理大量專利資料<br/>- 建置並管理 Amazon EC2 及 ElasticSearch 伺服器',
                    link  : 'http://pypat.com/',
                    link_text : 'PyPAT 公司介紹'
                },
                {
                    title : '2015 - 2016 台灣駭客年會(HITCON) 中英口譯員',
                    date  : '2015.8 / 2016.12',
                    text  : '提供會議中英文同步口譯',
                    link  : 'https://hitcon.org/2015/',
                    link_text : 'HITCON 介紹'
                },
                {
                    title : '2015 紐約國際模擬聯合國會議(NMUN) 台科代表團團長',
                    date  : '2015.3.29 - 4.2',
                    text  : '率領台科大代表團共十人赴紐約聯合國總部參加 NMUN，負責出團前之學術訓練及行政工作',
                    link  : 'http://www.nmun.org/nmun_ny.html',
                    link_text : 'NMUN 介紹'
                },
                {
                    title : '日本德島大學 暑期訪問學生',
                    date  : '2014.8.1 - 8.11',
                    text  : '經由台科大國際事務處推薦參與日本德島大學暑期課程',
                    link  : 'http://www.tokushima-u.ac.jp/english/',
                    link_text: '德島大學官網'
                },
                {
                    title : '學生計算機年會(SITCON) 議程組',
                    date  : '2014 - 2016',
                    text  : 'SITCON 學生計算機年會係一學生自發組成的研討會，秉持著以學生為主軸的核心價值，藉以凝聚與傳遞學生的力量',
                    link  : 'http://sitcon.org/',
                    link_text : 'STICON 介紹'
                }
            ]
        }
    }
};

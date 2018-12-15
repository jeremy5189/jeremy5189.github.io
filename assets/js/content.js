var last_update_time = '2018.12.15';
var CONTENT = {
  'en': {
    sidebar: {
      about_me: 'About Me',
      my_works: 'My Works',
      what_i_know: 'What I Know',
      my_experience: 'My Experience',
      contact_me: 'Contact Me',
      switch_lang: '切換語言',
      my_slides: 'My Slides',
      target_lang: 'zh-tw',
      back_to_top: 'Back To Top',
      latest_update: last_update_time,
    },
    about_me: {
      quote: 'Also known as Jing Bo Yen. Is a developer and traveler.',
      learn_more: 'Learn more',
      visit_blog: 'Visit my blog'
    },
    my_works_section: {
        work_list: [{
          img_src: 'https://user-images.githubusercontent.com/1984426/50040572-edfb6400-0080-11e9-89cf-d5548908bc8a.jpg',
          title: 'HITCON DEFENCE Scoreboard',
          text: 'This scoreboard is developed within a week, used in HITCON Defence enterprise hacking/defence contest.',
          enabled: true,
          buttons: [{
            link_text: 'Main Board',
            link_to: 'https://github.com/jeremy5189/hitcon-scoreboard'
          }, {
            link_text: 'Team Board',
            link_to: 'https://github.com/jeremy5189/hitcon-scoreboard-team'
          }]
        }, {
          img_src: 'images/works/glossika.png',
          title: 'Glossika - Learn a Language the Most Natural Way',
          text: 'This webiste was designed and developed by me when I was working for Glossika. Glossika’s spaced repetition method delivers fluency by using sound patterns and real-life conversations. With the latest developments in memory and linguistic knowledge, language learning becomes effective, easy, and fast.',
          enabled: true,
          buttons: [{
            link_text: 'Glossika',
            link_to: 'https://glossika.com'
          }]
        },{
          img_src: 'images/works/34c3.jpg',
          title: 'Club Mate & German Hacker: 34C3',
          text: 'My keynote at SITCON 2018. Sharing the expirences of attending the Chaos Communication Congress (34C3) at Leipzig, Germany.',
          enabled: true,
          buttons: [{
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/club-mate-and-hacker-34c3-at-sitcon'
          }]
        }, {
          img_src: 'images/works/pdmod.png',
          title: 'PDModerator - Panel Discussion Moderator',
          text: 'PDModerator (PDMod) is a conference software developed for SITCON 2017 Panel Discussion. PDMod aims to provide equal speaking rights to every attendee in the conference room. Attendee can submit speaker application via the PDMod interface. Which was later review by the moderator and been put on the speaker queue.',
          enabled: true,
          buttons: [{
            link_text: 'Github',
            link_to: 'https://github.com/jeremy5189/PDModerator'
          }, {
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/how-we-hacked-a-forum'
          }]
        }, {
          img_src: 'images/works/booking-hack.jpg',
          title: 'Booking.com Taipei Hack 2nd Prize',
          text: 'In the two days hackathon, I lead team 1 along with 4 member and developed a hotel version of doodle with React, Lumen and Native Android.',
          enabled: true,
          buttons: [{
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/bdecisive-booking-dot-com-taipei-hack-2nd-prize'
          }]
        }, {
          img_src: 'images/works/vegeholic.png',
          title: 'Vegeholic Vegan Recipe',
          text: 'Attracts over 20k unique visitor in the first 2 weeks. I developed a part of the front-end and the whole back-end system of this recipe sharing website. Running Laravel on AWS EC2 along with RDS and storing user uploaded image in S3 and delivered by Cloudfront.',
          enabled: true,
          buttons: [{
              link_text: 'Vegeholic',
              link_to: 'https://vegeholic.asia/'
            },
            {
              link_text: 'Facebook',
              link_to: 'https://www.facebook.com/vegeholic.asia'
            }
          ]
        },
        {
          img_src: 'images/works/cloudmun_gsl.png',
          title: 'CloudMUN - The Next Generation Cloud-based Model United Nations Conference System',
          text: 'I started this project since 2015 to develop a professional MUN conference WebApp featuring Google Docs like realtime syncing. Currently I worked with serveral friends to provide service to MUN conferences.',
          enabled: true,
          buttons: [{
              link_text: 'CloudMUN',
              link_to: 'https://cloudmun.com.tw'
            },
            {
              link_text: 'Facebook',
              link_to: 'https://www.facebook.com/cloudmun.com.tw'
            }
          ]
        },
        {
          img_src: 'images/works/sensortag-websocket.png',
          title: 'IoT made easy: RPi, Sensortag, Websocket with Node.js',
          text: 'My talk at SITCON x HK @ CityU. Introducing how Raspberry Pi 3 can connect to a TI sensortag via bluetooth by Node.js. And how to stream real time data to the browser using Websocket.',
          enabled: true,
          buttons: [{
              link_text: 'SITCON x HK',
              link_to: 'http://hk.sitcon.org/2016/#!/topic/IoT'
            },
            {
              link_text: 'Github',
              link_to: 'https://github.com/jeremy5189/Sensortag-Websocket'
            }
          ]
        },
        {
          img_src: 'images/works/paywhich_icon_gray.png',
          title: 'PayWhich WebApp',
          text: 'Taiwan credit card foreign transaction fee calculator. Automatically retrieve official currency exchange rate from MasterCard, VISA and JCB',
          enabled: true,
          buttons: [{
              link_to: 'http://paywhich.patricks.tw',
              link_text: 'Link to PayWhich'
            },
            {
              link_text: 'Github',
              link_to: 'https://github.com/jeremy5189/PayWhich'
            }
          ]
        },
        {
          img_src: 'images/works/hahow-backend.png',
          title: 'Laravel Backend Web Development for Beginner (Online Video Course)',
          text: 'Achieved over 250 student signup for this online video course within 30 days.',
          enabled: true,
          buttons: [{
            link_to: 'https://hahow.in/cr/laravel-backend',
            link_text: 'View course page'
          }]
        },
        {
          img_src: 'images/works/hahow-frontend.png',
          title: 'Frontend Web Development for Beginner (Online Video Course)',
          text: 'Achieved 350 (Over 1000% of initial estimation) student signup for this online video course within 30 days.',
          enabled: true,
          buttons: [{
            link_to: 'https://hahow.in/cr/frontend-web-starter',
            link_text: 'View course page'
          }]
        },
        {
          img_src: 'images/works/ntust-lost.png',
          title: 'NTUST Lost and Found System',
          text: 'Development started around 2013, got online around 2014. Now served as the official lost and found system in the NTUST and maintained by the Student Affairs Office',
          enabled: true,
          buttons: [{
            link_to: 'http://lost.ntust.edu.tw',
            link_text: 'Visit system'
          }]
        },
        {
          img_src: 'images/works/bi_charts.jpg',
          title: 'Billows Security Portal / Log Master',
          text: 'Company product, see website for more detail.',
          enabled: true,
          buttons: [{
            link_to: 'http://billows.com.tw/',
            link_text: 'Product details'
          }]
        }
      ]
    },
    what_i_know: {
      what_i_know: 'What I Know',
      text: 'I\'m a backend web developer. The following figure is a brief summary of my skills.',
      skills: [{
          icon: 'code',
          title: 'PHP / Laravel',
          text: 'Five years of native PHP experience, two and a half year of Laravel framework experience.'
        },
        {
          icon: 'codepen',
          title: 'Node.js',
          text: 'Two years of Node.js experience, both backend development (Express.js, Sails.js) and data analysis.'
        },
        {
          icon: 'code-fork',
          title: 'Git',
          text: 'Four years of git version control experience. Collaborating with three commerical team up to ten developer.'
        },
        {
          icon: 'terminal',
          title: 'Ubuntu Server / AWS',
          text: 'Four years of Ubuntu Server / Unix-like experience. Experienced in AWS operation including VPC, Cloudfront, Load Balancer, S3, EC2 and RDS.'
        },
        {
          icon: 'desktop',
          title: 'Frontend',
          text: 'Vue.js, Webpack, HTML, CSS, Native JS, jQuery, Highcharts, Bootstrap'
        },
        {
          icon: 'chain',
          title: 'Other',
          text: 'Python, MySQL, ElasticSearch, Network administration, C/C++, VB.Net, C#.Net, English (TOEIC 930), Deutsch(A1.1)'
        }
      ]
    },
    my_experince_section: {
      experiences: [{
          title: 'Full Stack Developer, Cybavo',
          date: '2018.5 - Present',
          list: [
            'Employee number 2 of this blockchain startup, involved in the frontend/backend system design of our cooperated warm wallet and implemented the frontend system structure.',
            'Kickstarted the Cybavo Wallet frontend SPA with Vue.js and Vuex. Deployed product to multiple crypto currency exchange, including Cobinhood and BitoEX.',
            'Adopted Mocha and Nightwatch to conduct testing, working with UI designer to improve UI/UX',
          ],
          link: 'http://cybavo.com',
          link_text: 'Cybavo'
        }, {
          title: 'Full Stack Developer, Glossika',
          date: '2017.4 ~ 2018.5',
          text: '',
          list: [
            'Involved in the whole process of a major business reform. Responsible for the design of a new language learning software as a service platform’s system structure.',
            'Led the development team to complete the implementation of algorithm, cloud server, front-end and back-end development within 3 months.',
            '$50k revenue is generated on the launch day. Reached $15k monthly ($220k annually) subscription revenue within 2 months. Average user growth rate 5% per day.',
            'Adopted Python to implement NLP algorithm, Laravel as backend, React as frontend. PHPUnit and Drone as Testing/CI. Leverage AWS VPC, load balancer, RDS and Cloudfront.',
          ],
          link: 'http://glossika.com',
          link_text: 'Glossika'
        },
        {
          title: 'Researcher, KPMG Taiwan IT Advisory',
          date: '2016.9 ~ 2017.6',
          text: '',
          list: [
            'Member of the InfoSec Lab (319C). Participated in the ISO 17025 certificating of the lab itself.',
            'Participated in InfoSec auditing projects such as Citibank (Taiwan), HSBC (Taiwan) and Mizuho Bank (Taipei). Conducted vulnerability assessment. Composed and translated several security audit report.',
            'Participated in the First Commercial Bank ATM heist incident InfoSec recovery project. ',
            'Participated in the China Trust Bank (CTBC) Common Reporting Standard (CRS) project.'
          ],
          link: 'https://home.kpmg.com/tw/zh/home.html',
          link_text: 'KPMG Taiwan'
        },
        {
          title: 'Exchange Student, Technical University of Cologne (TH Köln)',
          date: '2016.3 - 2016.8',
          text: 'Major: International Business',
          link: 'https://www.th-koeln.de/',
          link_text: 'Visit TH Köln'
        },
        {
          title: 'Full Stack Developer, Billows Technology Ltd.',
          date: '2015.5 - 2016.1',
          text: '',
          list: [
            'Responsible for the maintenance of an enterprise grade InfoSec SIEM, and a big-data syslog storage and analysis system based on Elasticsearch.',
            'Assisted the deployment of our system to clients such as CHT, Taiwan HSR and Taoyuan Int. Airport.',
            'Responsible for the development of a brand new syslog analysis, visualization and compliance reporting system. Which took 3 months to complete the development, QA and deployment.'
          ],
          link: 'http://billows.com.tw/',
          link_text: 'Visit Billows'
        },
        {
          title: 'Data Analyst & System Operator, PyPAT IP Services',
          date: '2015.9 - 2015.12',
          text: '',
          list: [
            'Responsible for patent data analysis and visualization.',
            'Adopted Node.js to parallel process large amount of U.S. patent office XML. Improved the searching and indexing speed by 2 times in the means of optimizing Elasticsearch mapping.'
          ],
          link: 'http://pypat.com/',
          link_text: 'Visit PyPAT'
        },
        {
          title: 'Interpreter, Hacks in Taiwan Conference (HITCON)',
          date: '2015.8 / 2016.12 / 2017.8 / 2018.8 / 2018.12',
          text: 'Provide simultaneous interpreting for both English and Chinese.',
          link: 'https://hitcon.org/2015/',
          link_text: 'Visit HITCON'
        },
        {
          title: 'Head of NTUST delegation, National Model United Nations (NMUN) 2015',
          date: '2015.3.29 - 4.2',
          text: 'As the head of NTUST delegation to NMUN 2015, I\'m responsible for both academic training and administration affairs.',
          link: 'http://www.nmun.org/nmun_ny.html',
          link_text: 'Visit NMUN'
        },
        {
          title: 'Visiting Student, University of Tokushima',
          date: '2014.8.1 - 8.11',
          text: 'I was recommended by the office of International affairs office of NTUST to visit the University of Tokushima in Japan for two weeks.',
          link: 'http://www.tokushima-u.ac.jp/english/',
          link_text: 'Visit Tokushima-U'
        },
        {
          title: 'Students\' Information Technology Conference (STICON) Agenda Committee',
          date: '2014 - 2018',
          text: 'The founding purpose and goal of SITCON is to provide a platform for students who are interested in IT to speak and promote their work. Therefore, the Agenda Committee have done our best job to pick and select every outstanding paper which we had received.',
          link: 'http://sitcon.org/',
          link_text: 'Visit STICON'
        }
      ]
    }
  },
  'zh-tw': {
    sidebar: {
      about_me: '關於我',
      my_works: '作品集',
      what_i_know: '專業技能',
      my_experience: '經歷',
      contact_me: '聯絡我',
      switch_lang: 'English',
      my_slides: '簡報',
      target_lang: 'en',
      back_to_top: '返回頁首',
      latest_update: last_update_time,
    },
    about_me: {
      quote: 'Also known as Jing Bo Yen. Is a developer and traveller.',
      learn_more: '繼續閱讀',
      visit_blog: '部落格'
    },
    my_works_section: {
      work_list: [{
          img_src: 'https://user-images.githubusercontent.com/1984426/50040572-edfb6400-0080-11e9-89cf-d5548908bc8a.jpg',
          title: 'HITCON DEFENCE 企業攻防賽計分板',
          text: '此計分板於短短一週內開發完成，提供 HITCON DEFENCE 企業攻防賽當天顯示各隊伍分數及攻擊狀態之用。',
          enabled: true,
          buttons: [{
            link_text: '主板',
            link_to: 'https://github.com/jeremy5189/hitcon-scoreboard'
          }, {
            link_text: '各隊伍',
            link_to: 'https://github.com/jeremy5189/hitcon-scoreboard-team'
          }]
        }, {
          img_src: 'images/works/glossika.png',
          title: 'Glossika - 自然而然開口說外語',
          text: '此網站是我在萬語科技任職時負責設計開發。Glossika 學習法建立在記憶和語言學的科學基礎上，利用間隔重複系統訓練語言學習者的口說能力，讓語言學習變得簡單、快速而且有效率。',
          enabled: true,
          buttons: [{
            link_text: 'Glossika',
            link_to: 'https://glossika.com'
          }]
        },{
          img_src: 'images/works/34c3.jpg',
          title: 'Club Mate 與德國駭客精神：34C3 大會實錄',
          text: '此為我於 SITCON 2018 擔任講者之講題，分享 2017 年底帶隊前往萊比錫參與 Chaos Communication Congress 之經驗，與我對於德國駭客精神的認識',
          enabled: true,
          buttons: [{
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/club-mate-and-hacker-34c3-at-sitcon'
          }]
        }, {
          img_src: 'images/works/pdmod.png',
          title: 'PDModerator - 論壇發言系統',
          text: 'PDModerator 是我為 SITCON 2017 論壇開發的發言系統。PDMod 致力於會議或論壇中提供所有參與者平等的發言權利。與會者透過系統介面提出發言申請後，所提交的資訊會即時送至主持人介面，由主持人審核後排入發言佇列。發言佇列介面會透過投影機展示給所有參與者，即時呈現最近六位發言者、目前發言者以及計時器剩餘時間。',
          enabled: true,
          buttons: [{
            link_text: 'Github',
            link_to: 'https://github.com/jeremy5189/PDModerator'
          }, {
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/how-we-hacked-a-forum'
          }]
        }, {
          img_src: 'images/works/booking-hack.jpg',
          title: 'Booking.com 台北黑客松第二名',
          text: '為期兩天的黑客松中，我擔任 PM 兼任 Backend，與 Team 1 四位朋友分工合作，利用 React, Lumen 和 Native Android 開發了一套飯店版的 Doodle - BDecisive，協助旅伴快速規劃行程及預定飯店。',
          enabled: true,
          buttons: [{
            link_text: 'Keynote',
            link_to: 'https://speakerdeck.com/jeremy5189/bdecisive-booking-dot-com-taipei-hack-2nd-prize'
          }]
        }, {
          img_src: 'images/works/vegeholic.png',
          title: 'Vegeholic 全植食尚',
          text: 'Vegeholic 上線半個月即吸引超過 2 萬不重複訪客。我負責建置此食譜分享平台之後端基礎建設及一部分的前端設計，使用 AWS EC2 執行 Laravel，採用 AWS RDS 資料庫以及利用 S3 和 Cloudfront 儲存使用者上傳之圖片。目前仍持續維護並加上新功能。',
          enabled: true,
          buttons: [{
              link_text: 'Vegeholic',
              link_to: 'https://vegeholic.asia/'
            },
            {
              link_text: 'Facebook',
              link_to: 'https://www.facebook.com/vegeholic.asia'
            }
          ]
        },
        {
          img_src: 'images/works/cloudmun_gsl.png',
          title: 'CloudMUN - 雲端模聯會議系統',
          text: '2015 年初我獨自開始開發，目標是做一個擁有 Google 文件即時同步功能的專業會議系統。目前我和幾位朋友一同營運和維護 CloudMUN，對許多舉辦會議的組織和客戶提供專業服務。',
          enabled: true,
          buttons: [{
              link_text: 'CloudMUN',
              link_to: 'https://cloudmun.com.tw/zh/'
            },
            {
              link_text: 'Facebook',
              link_to: 'https://www.facebook.com/cloudmun.com.tw'
            }
          ]
        },
        {
          img_src: 'images/works/sensortag-websocket.png',
          title: 'IoT made easy: RPi, Sensortag, Websocket with Node.js',
          text: '擔任 SITCON x HK @ 香港城市大學講者。介紹 IoT, BLE 並示範如何使用 Raspberry Pi 3 藍芽連接至 TI Sensortag 然後將感測器資料利用 WebSocket 即時送至前端。',
          enabled: true,
          buttons: [{
              link_text: 'SITCON x HK',
              link_to: 'http://hk.sitcon.org/2016/#!/topic/IoT'
            },
            {
              link_text: 'Github',
              link_to: 'https://github.com/jeremy5189/Sensortag-Websocket'
            }
          ]
        },
        {
          img_src: 'images/works/paywhich_icon_gray.png',
          title: 'PayWhich WebApp',
          text: 'PayWhich 是您在國外使用台灣信用卡的好幫手。PayWhich 會自動取得最新的 VISA / Master / JCB 之匯率，同時儲存您所輸入的信用卡基本資料。並幫助您在結帳時，根據最新國際組織匯率換算，幫助您在多張信用卡中選擇一張最划算的卡片。',
          enabled: true,
          buttons: [{
            link_to: 'http://paywhich.patricks.tw',
            link_text: '前往 PayWhich'
          }]
        },
        {
          img_src: 'images/works/hahow-backend.png',
          title: 'Hahow Laravel 5.3 後端網站設計入門課程講師',
          text: '線上課程募資開始後 10 天即達標，募資結束後募得 300 位學生，目前已順利開課',
          enabled: true,
          buttons: [{
            link_to: 'https://hahow.in/cr/laravel-backend',
            link_text: '檢視課程頁面'
          }]
        },
        {
          img_src: 'images/works/hahow-frontend.png',
          title: 'Hahow 前端網頁設計入門課程講師',
          text: '線上課程開課募資一個月內達標 1000%，目前已順利開課，同學反應及討論非常熱烈',
          enabled: true,
          buttons: [{
            link_to: 'https://hahow.in/cr/frontend-web-starter',
            link_text: '檢視課程頁面'
          }]
        },
        {
          img_src: 'images/works/ntust-lost.png',
          title: '臺灣科技大學失物招領系統',
          text: '2013 年底開始開發，2014 年中正式上線，目前是臺科大官方遺失物招領系統，由學務處負責日常更新',
          enabled: true,
          buttons: [{
            link_to: 'http://lost.ntust.edu.tw',
            link_text: '前往系統'
          }]
        },
        {
          img_src: 'images/works/bi_charts.jpg',
          title: '竣盟科技 Security Portal / Log Master',
          text: '任職於竣盟科技時所負責的產品，細節請參考公司網站',
          enabled: true,
          buttons: [{
            link_to: 'http://billows.com.tw/',
            link_text: '前往公司網站'
          }]
        }
      ]
    },
    what_i_know: {
      what_i_know: '專業技能',
      text: '我的專長是網頁後端開發、資訊安全、伺服器管理及前後端整合，以下是我的技能樹：',
      skills: [{
          icon: 'code',
          title: 'PHP / Laravel',
          text: '五年 Native PHP 開發經驗，兩年半 Laravel 開發經驗'
        },
        {
          icon: 'codepen',
          title: 'Node.js',
          text: '兩年 Node.js 開發經驗，曾使用 Sails.js, Express.js 開發網頁後端，也曾使用 Node.js 做數據分析'
        },
        {
          icon: 'code-fork',
          title: 'Git',
          text: '四年 Git 版本控制經驗，曾與三個商業團隊、十個以上的開發者一同協作專案'
        },
        {
          icon: 'terminal',
          title: 'Ubuntu Server / AWS',
          text: '四年 Ubuntu / 類 Unix 系統經驗。曾使用 AWS 架構 VPC, Cloudfront, Load Balancer, S3, EC2, RDS 等經驗'
        },
        {
          icon: 'desktop',
          title: 'Frontend',
          text: 'Vue.js, HTML, CSS, Native JS, jQuery, Highcharts, Bootstrap'
        },
        {
          icon: 'chain',
          title: 'Other',
          text: 'Python, MySQL, Elastic Search, Network administration, C/C++, VB.Net, C#.Net, English (TOEIC 930), Deutsch(A1.1)'
        }
      ]
    },
    my_experince_section: {
      experiences: [{
          title: 'Cybavo 博歐科技 全端工程師',
          date: '2018.5 - Present',
          list: [
            '公司初創時期加入，負責規劃企業區塊鏈溫錢包的前端架構及 API，並實作前端架構',
            '部屬產品於知名虛擬貨幣交易所如 Cobinhood 和 BitoEX',
            '採用 Vue.js 架構 SPA，並採用 Vuex 連接後端與區塊鏈 API，同時兼顧加密機制與通訊安全',
            '採用 Mocha 實作 Unit test，Nightwatch 實作 E2E test，並與設計師合作進一步加強產品 UI/UX',
          ],
          link: 'http://cybavo.com',
          link_text: 'Cybavo'
        }, {
          title: 'Glossika 萬語科技 全端工程師',
          date: '2017.4 - 2018.5',
          list: [
            '全程參與公司重大業務轉型，負責規劃語言學習 SaaS 服務之系統架構',
            '領導開發團隊三個月內完成演算法實作、系統架構搭建、前後端開發整合後順利如期上線',
            '上線第一天營收 150 萬，兩個月後達到每年訂閱營收 600 萬，平均每日用戶成長率 5%',
            '採用 Python 實作 NLP 演算法，包括詞頻分析、多語言斷詞及公司研發之語法 (Syntax) 分析',
            '網頁後端採用 Laravel，前端採用 React，串接 Stripe 實作信用卡訂閱',
            '伺服器採用 AWS EC2，架構 VPC 並利用雙 LB 平衡內外部請求，並利用 CF CDN 處理全球流量',
            '採用 phpunit 執行 Unit Test，Laravel Dusk 執行 E2E Test，並導入 Jenkins/Drone CI'
          ],
          link: 'http://glossika.com',
          link_text: 'Glossika'
        }, {
          title: 'KPMG 資訊科技諮詢服務 研究員',
          date: '2016.9 ~ 2017.6',
          text_bak: '',
          list: [
            '任職於資訊科技諮詢部門資安實驗室 (319C K-Lab)，協助實驗室通過 ISO 17025 認證',
            '曾參與花旗銀行、匯豐銀行及日商瑞穗銀行之資安稽核專案，協助稽核報告之撰寫並負責翻譯',
            '曾參與第一銀行 ATM 遭國際犯罪盜領事件之資安事件處理，並協助執行資安檢測與風險評估',
            '曾參與中國信託 CRS 國際共同稅務申報準則之專案。協助分析 XML 格式並提供專業技術建議',
          ],
          link: 'https://home.kpmg.com/tw/zh/home.html',
          link_text: 'KPMG Taiwan'
        },
        {
          title: '德國科隆科技大學 交換學生',
          date: '2016.3 - 2016.8',
          text: '就讀臺灣科技大學資訊管理系時，前往德國科隆科技大學 (Technical University of Cologne) 國際商業系交換一學期。期間修習包括總體經濟、行為經濟、國際行銷及德文 A1 等課程',
          link: 'https://www.th-koeln.de/',
          link_text: '科隆科技大學網站'
        },
        {
          title: 'Billows 竣盟科技 全端網頁工程師',
          date: '2015.5 - 2016.1',
          text_bak: '',
          list: [
            '負責開發維護企業級資安 SIEM 系統及以 Elastic Search 為基底之巨量日誌儲存分析系統',
            '曾協助將產品部署於中華電信國分、台灣高鐵、桃園機場、華碩電腦等企業',
            '曾負責使用 Laravel 開發全新系統日誌收集、分析、可視化以及產生合規報告之系統。並於三個月內完成系統開發、自動化測試及部署後順利交付客戶部署、驗收',
          ],
          link: 'http://billows.com.tw/',
          link_text: 'Billows 公司介紹'
        },
        {
          title: 'PyPAT 桂桂科技 數據分析及系統管理',
          date: '2015.9 - 2015.12',
          text_bak: '',
          list: [
            '協助公司提供專利顧問服務，負責專利資料分析之技術實作',
            '利用 Node.js 平行化解析大量美國專利局 XML (單檔超過 1GB) 資料並導入 Elastic Search',
            '透過優化 Elastic Search mapping 後將搜尋、Indexing 速度增加了兩倍',
          ],
          link: 'http://pypat.com/',
          link_text: 'PyPAT 公司介紹'
        },
        {
          title: '台灣駭客年會(HITCON) 中英口譯員',
          date: '2015.8 / 2016.12 / 2017.8 / 2018.8 / 2018.12',
          text: '提供會議中英文同步口譯/筆譯',
          link: 'https://hitcon.org',
          link_text: 'HITCON 介紹'
        },
        {
          title: '2015 紐約國際模擬聯合國會議(NMUN) 台科代表團團長',
          date: '2015.3.29 - 4.2',
          text: '率領台科大代表團共十人赴紐約聯合國總部參加 NMUN，負責出團前之學術訓練及行政工作',
          link: 'http://www.nmun.org/nmun_ny.html',
          link_text: 'NMUN 介紹'
        },
        {
          title: '日本德島大學 暑期訪問學生',
          date: '2014.8.1 - 8.11',
          text: '經由台科大國際事務處推薦參與日本德島大學暑期課程',
          link: 'http://www.tokushima-u.ac.jp/english/',
          link_text: '德島大學官網'
        },
        {
          title: '學生計算機年會(SITCON) 議程組',
          date: '2014 - 2018',
          text: 'SITCON 學生計算機年會係一學生自發組成的研討會，秉持著以學生為主軸的核心價值，藉以凝聚與傳遞學生的力量',
          link: 'http://sitcon.org/',
          link_text: 'STICON 介紹'
        }
      ]
    }
  }
};

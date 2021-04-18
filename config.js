var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic3lkbmV5ZmFuZGVyc29uIiwiYSI6ImNrbmRtYXNidzFneHEydW1scTJwZTlkZGoifQ.75pDT2eqLOUa7Yn7XfakoQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'A Brief History of Baton Rouge',
    subtitle: 'A visual history of the urban development of Baton Rouge. This project highlights the racial and cultural history of Baton Rouge and its impact on the built environment and spatial development.',
    byline: 'Gathered and Sourced by Sydney Anderson',
    footer: 'Created as an extension of'<a href="https://buildbatonrouge.org/about-us/where-we-live/"> Build Baton Rouge, Where We Live./a>',
    chapters: [
        {
            id: 'Chapter-1-Istrouma-Bluff',
            alignment: 'left',
            hidden: false,
            title: 'Istrouma Bluff',
            image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Istrouma Bluff.png',
            description: 'Baton Rouge owes its historical importance to its location upon the Istrouma Bluff, the first natural bluff upriver from the Mississippi River Delta and the Gulf of Mexico. Prior to colonization, the Houma, Bayagoula, Choctaw, Chitimacha, and Biloxi people lived in and cared for the region along the Mississippi.',
            footer:'Sourced from United Houma Nation and Wikipedia, History of Baton Rouge. Image from <a href="https://www.mytopo.com/locations/index.cfm?fid=552783 ">MyTopo/a>',
            location: {
                center: [30.448063406553803, -91.19096809825336],
                zoom: 16.13,
                pitch: 60,
                bearing: 44
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
            {
                id: 'Chapter-2-Louisiana-State-University',
                alignment: 'left',
                hidden: false,
                title: 'Louisiana State University',
                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/LSU.jpg',
                description: 'Louisiana State Seminary of Learning and Military Academy moved from Pineville to Baton Rouge in 1870 and renamed itself Louisiana State University. LSU’s Baton Rouge campus became an anchor institution for early Baton Rouge.  In 1926, Louisiana State University relocated from downtown to its present campus south of the Old South neighborhood. The move and the University’s expansion reflected the city’s rapid growth.',
                footer:'Sourced from Wikipedia, History of Baton Rouge. Image from <a href="https://news.blogs.lib.lsu.edu/2016/09/09/history-and-beauty-the-development-of-lsus-campus/"> LSU Library/a>',
                location: {
                    center: [30.41350536034426, -91.18229041105494],
                    zoom: 16.13,
                    pitch: 60,
                    bearing: 44
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 1,
                    //     duration: 5000
                    // }
                ],
                onChapterExit: [
                    // {
                    //     layer: 'layer-name',
                    //     opacity: 0
                    // }
                ]
            },
                {
                    id: 'Chapter-3-The Grand Theater',
                    alignment: 'left',
                    hidden: false,
                    title: 'The Grand Theater',
                    image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Grand Theater.jpg',
                    description: 'Beginning in the early 1890s, the Grand Theater operated as a opera house and dance hall for Black theater-goers, and later "Negro opera house and dance hall," and later as a movie theatre. Through the years, famous black entertainers performed there. It was later converted to a dance club in the mid-1900s.',
                    footer:'Information and image sourced from <a href="https://www.loc.gov/pictures/item/la0073/"> Library of Congress./a>',
                    location: {
                        center: [30.447328575755545, -91.17725968775568],
                        zoom: 16.13,
                        pitch: 60,
                        bearing: 44
                    },
                    mapAnimation: 'flyTo',
                    rotateAnimation: false,
                    callback: '',
                    onChapterEnter: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 1,
                        //     duration: 5000
                        // }
                    ],
                    onChapterExit: [
                        // {
                        //     layer: 'layer-name',
                        //     opacity: 0
                        // }
                    ]
                },
                    {
                        id: 'Chapter-4-The-Lakes-Suburb-Gracie',
                        alignment: 'left',
                        hidden: false,
                        title: 'The Lakes/Suburb Gracie',
                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/suburb gracie.jpg',
                        description: '"William C. Whitaker started buying property in a localized area of eastern Baton Rouge in 1905, building some new shotgun houses. He moved in others and also utilized already existing shotguns in situ. There are also twenty L-shaped houses similar in construction to the shotguns. Still owned by the Whitaker family, this unusual concentration of 136 shotgun and L-shaped houses provides a streetscape of typical, low-income urban dwellings and is representative of Southern vernacular architecture."',
                        footer:'Information and image sourced from <a href="https://www.loc.gov/item/la0087/"> Library of Congress./a>',
                        location: {
                            center: [30.456854551223426, -91.1726364110395],
                            zoom: 16.13,
                            pitch: 60,
                            bearing: 44
                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1,
                            //     duration: 5000
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }
                        ]
                    },
                        {
                            id: 'Chapter-5-Baton-Rouge-College',
                            alignment: 'left',
                            hidden: false,
                            title: 'Baton Rouge College and Mckinley High School',
                            image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/BR College.jpg',
                            description: '"The Baton Rouge Academy, an institution sponsored by the Fourth District Missionary Baptist Association of Louisiana for black boys and girls. The Academy, whose enrollment was around 200 students with four faculty members, remained in a wooden frame building until 1905 when fire destroyed it and all furniture. When the school reopened for the 1906-1907 session, it was housed in a modern three-story brick building with a new name-The Baton Rouge College, and a new title for its head-President.  The academic program was basically of a high school nature, and "designed to prepare a student to teach as well as obtain admission to College." The McKinley High School, built in 1926 on what is now Thomas H. Delpit Boulevard, replaced the 1912 elementary and secondary school for African American children on Perkins Road.""',
                            footer:'Information and image sourced from <a href="https://hbcudigitallibrary.auctr.edu/digital/collection/suam/id/1465"> HBCU Digital Library./a>',
                            location: {
                                center: [30.423632467109517, -91.17431232256533],
                                zoom: 16.13,
                                pitch: 60,
                                bearing: 44
                            },
                            mapAnimation: 'flyTo',
                            rotateAnimation: false,
                            callback: '',
                            onChapterEnter: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 1,
                                //     duration: 5000
                                // }
                            ],
                            onChapterExit: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 0
                                // }
                            ]
                        },
                            {
                                id: 'Chapter-6-Exxon-Refinery',
                                alignment: 'left',
                                hidden: false,
                                title: 'Exxon Refinery',
                                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Exxon Shift Change.jpg',
                                description: 'In 1909, Standard Oil, the forerunner to ExxonMobil, converted a 225-acre cotton plantation north of downtown Baton Rouge and on the banks of the Mississippi River into what was billed as “the largest oil refinery in the world.” In January 1919, The Lamp – Standard Oil’s nationally circulated trade publication – wrote glowingly about the refinery as a replacement to the area’s cotton fields and primitive slave economy. It declared the refinery “an agent of Post-Reconstruction reconciliation” uniting northern expertise and southern natural resources. Today, it is the fourth largest oil refinery in the nation and the twelfth largest in the world.  It is one of many petrochemical facilities located on the river and stretching from Baton Rouge south to New Orleans. Despite the dominance of the petrochemical industry, state government and Louisiana State University are the region’s largest employers.',
                                footer:'Information sourced from <a href="https://sah-archipedia.org/buildings/LA-01-EB39"> Archipedia./a>, and image sourced from <a href="https://news.blogs.lib.lsu.edu/2015/04/13/exxonmobil_baton_rouge/"> the LSU Library ExxonMobil Baton Rouge Collection./a>',
                                location: {
                                    center: [30.486510943314862, -91.16975599739457],
                                    zoom: 16.13,
                                    pitch: 60,
                                    bearing: 44
                                },
                                mapAnimation: 'flyTo',
                                rotateAnimation: false,
                                callback: '',
                                onChapterEnter: [
                                    // {
                                    //     layer: 'layer-name',
                                    //     opacity: 1,
                                    //     duration: 5000
                                    // }
                                ],
                                onChapterExit: [
                                    // {
                                    //     layer: 'layer-name',
                                    //     opacity: 0
                                    // }
                                ]
                            },
                                {
                                    id: 'Chapter-7-Southern-University',
                                    alignment: 'left',
                                    hidden: false,
                                    title: 'Southern University',
                                    image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Southern University.jpg',
                                    description: 'In 1914, Southern University relocated from New Orleans to Scotlandville, Louisiana, then a small community immediately north of Baton Rouge and the new Standard Oil plant. Southern University faculty and staff quickly populated Scotlandville and the University sponsored the area’s first professional offices and financial institutions. In segregated Baton Rouge, Black settlement was limited to Scotlandville, Old South, and the Eden Park area. These areas grew into hubs for Black political, social, economic, and cultural activity in the early decades of the twentieth century.',
                                    footer:'Information sourced from Wikipedia, “Southern University; History," and the Baton Rouge Business Report, "Celebrating 200 Years of Baton Rouge." Image from <a href="https://www.theadvocate.com/baton_rouge/news/education/article_5f6edcd4-104f-11e8-8002-1327b8a7dabf.html"> The Advocate./a>',
                                    location: {
                                        center: [30.521100854751385, -91.18549922635883],
                                        zoom: 16.13,
                                        pitch: 60,
                                        bearing: 44
                                    },
                                    mapAnimation: 'flyTo',
                                    rotateAnimation: false,
                                    callback: '',
                                    onChapterEnter: [
                                        // {
                                        //     layer: 'layer-name',
                                        //     opacity: 1,
                                        //     duration: 5000
                                        // }
                                    ],
                                    onChapterExit: [
                                        // {
                                        //     layer: 'layer-name',
                                        //     opacity: 0
                                        // }
                                    ]
                                },
                                    {
                                        id: 'Chapter-8-Prince-Hall-Masonic-Temple',
                                        alignment: 'left',
                                        hidden: false,
                                        title: 'Prince Hall Masonic Temple',
                                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Prince Hall Masonic Temple.jpg',
                                        description: 'Built in 1925, Prince Hall "was a center for Black entertainment, and saw the likes of Cab Galloway and Duke Ellington," among others.',
                                        footer:'Information sourced from <a href="https://static1.squarespace.com/static/555f917ee4b0c0ea1af89d97/t/594463da893fc095e0bd7112/1497654251540/Black+History+in+BR.pdf"> MidCity Studios Black History in BR./a> and image from <a href="https://historicalbatonrouge.blogspot.com/2009/01/prince-hall-masonic-temple-temple.html"> Historical Baton Rouge Blogspot./a>',
                                        location: {
                                            center: [30.448672935025094, -91.17529108035724],
                                            zoom: 16.13,
                                            pitch: 60,
                                            bearing: 44
                                        },
                                        mapAnimation: 'flyTo',
                                        rotateAnimation: false,
                                        callback: '',
                                        onChapterEnter: [
                                            // {
                                            //     layer: 'layer-name',
                                            //     opacity: 1,
                                            //     duration: 5000
                                            // }
                                        ],
                                        onChapterExit: [
                                            // {
                                            //     layer: 'layer-name',
                                            //     opacity: 0
                                            // }
                                        ]
                                    },
                                    {
                                        id: 'Chapter-9-Capitol-Building',
                                        alignment: 'left',
                                        hidden: false,
                                        title: 'Louisiana Capitol Building',
                                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/LA-state-Capitol-1933.jpg',
                                        description: 'In 1932 construction finished on a new state capitol. The structure immediately marked the city’s skyline and was a testament to the vision of Governor Huey P. Long. It was then and remains the tallest state capitol in the nation. The former governor is buried in the gardens leading up to the capitol.',
                                        footer:'Information sourced from Wikipedia, “Louisiana State Capitol," and image from <a href="https://64parishes.org/entry-image/aerial-photo-of-the-louisiana-state-capitol-and-grounds"> 64 Parishes./a>',
                                        location: {
                                            center: [30.45775498185139, -91.18740904172427],
                                            zoom: 16.13,
                                            pitch: 60,
                                            bearing: 44
                                        },
                                        mapAnimation: 'flyTo',
                                        rotateAnimation: false,
                                        callback: '',
                                        onChapterEnter: [
                                            // {
                                            //     layer: 'layer-name',
                                            //     opacity: 1,
                                            //     duration: 5000
                                            // }
                                        ],
                                        onChapterExit: [
                                            // {
                                            //     layer: 'layer-name',
                                            //     opacity: 0
                                            // }
                                        ]
                                    },
                                        {
                                            id: 'Chapter-10-Brooks-Park',
                                            alignment: 'left',
                                            hidden: false,
                                            title: 'Brooks Park',
                                            image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Brooks Park.jpg',
                                            description: 'Brooks Park and the Brooks Park pool were born out of efforts by Black activists in the United Negro Reecreation Association, like Reverend Willie Brooks, to build a community pool for the Black community in Baton Rouge, who were not allowed to use the segregated City Park pool at the time. In the early 1950s, the UNRA donated the pool and park to the Baton Rouge Recreation & Parks Commission, with an agreement that it be used to continue to serve the surrounding community. The Black community continued to push for the integration of the City Park pool, asserting their right to utilize reecreational facilities funded by their tax dollars.',
                                            footer:'Information and image sourced from <a href="https://static1.squarespace.com/static/555f917ee4b0c0ea1af89d97/t/594463da893fc095e0bd7112/1497654251540/Black+History+in+BR.pdf"> MidCity Studios Black History in BR./a> and from <a href="https://artsandculture.google.com/exhibit/the-baton-rouge-swim-in-east-baton-rouge-parish-library/xALCMWwNlIjDJw?hl=en"> The East Baton Rouge Parish Library, "The Baton Rouge Swim-in."/a>',
                                            location: {
                                                center: [30.434915550905263, -91.1741852184454],
                                                zoom: 16.13,
                                                pitch: 60,
                                                bearing: 44
                                            },
                                            mapAnimation: 'flyTo',
                                            rotateAnimation: false,
                                            callback: '',
                                            onChapterEnter: [
                                                // {
                                                //     layer: 'layer-name',
                                                //     opacity: 1,
                                                //     duration: 5000
                                                // }
                                            ],
                                            onChapterExit: [
                                                // {
                                                //     layer: 'layer-name',
                                                //     opacity: 0
                                                // }
                                            ]
                                        },
                                            {
                                                id: 'Chapter-11-City-Park',
                                                alignment: 'left',
                                                hidden: false,
                                                title: 'City Park',
                                                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/City Park Pool.jpg',
                                                description: 'City Park in Baton Rouge was home to the only public pool in Baton Rouge and was segregated throughout the 40s. In 1946, the United Negro Recreation Association was established with the purpose of funding and building a public pool for use by the Black community in Baton Rouge. A swim-in, led by local Black leaders like Pearl George, took place in 1963 in an attempt to force the city to integrate the pool. In response, the city filled in and closed the pool rather than integrate.',
                                                footer:'Information from <a href="https://artsandculture.google.com/exhibit/the-baton-rouge-swim-in-east-baton-rouge-parish-library/xALCMWwNlIjDJw?hl=en"> The East Baton Rouge Parish Library, "The Baton Rouge Swim-in."/a>',
                                                location: {
                                                    center: [30.432809502058905, -91.16762791502175],
                                                    zoom: 16.13,
                                                    pitch: 60,
                                                    bearing: 44
                                                },
                                                mapAnimation: 'flyTo',
                                                rotateAnimation: false,
                                                callback: '',
                                                onChapterEnter: [
                                                    // {
                                                    //     layer: 'layer-name',
                                                    //     opacity: 1,
                                                    //     duration: 5000
                                                    // }
                                                ],
                                                onChapterExit: [
                                                    // {
                                                    //     layer: 'layer-name',
                                                    //     opacity: 0
                                                    // }
                                                ]
                                            },
                                            {
                                                id: 'Chapter-12-Baton-Rouge-High-School',
                                                alignment: 'left',
                                                hidden: false,
                                                title: 'Baton Rouge High School',
                                                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/BR High School.jpg',
                                                description: 'The same year that the City Park pool was closed, thirteen students desegregated Baton Rouge High School when the 1963-1964 school-year began on September 3rd.  They were selected from McKinley High School and Southern University Laboratory School and their actions were profiled in the national news.  The NAACP and local church leaders had trained the black students for what they might expect, and those thirteen students and the ones who followed in the initial years of integration faced constant physical, emotional and psychological attacks.  Their brave actions placed them on the frontlines of the nation’s growing school integration movement.  But school integration would prove to be much more transformative for Baton Rouge than could have been understood on September 3, 1963.  What started then would have implications for the next several decades.',
                                                footer:'Information and image sourced from <a href="https://digbr.com/reflections-on-desegregation/"> Jones, Leslie D. “Reflections on Desegregation,” Dig Baton Rouge (October 9, 2013) /a> and image from <a href="https://brhsfoundation.net/wp-content/uploads/2018/05/BRHS-1922.jpg"> The Baton Rouge High School Foundation."/a>',
                                                location: {
                                                    center: [30.44606795778077, -91.15953176501563],
                                                    zoom: 16.13,
                                                    pitch: 60,
                                                    bearing: 44
                                                },
                                                mapAnimation: 'flyTo',
                                                rotateAnimation: false,
                                                callback: '',
                                                onChapterEnter: [
                                                    // {
                                                    //     layer: 'layer-name',
                                                    //     opacity: 1,
                                                    //     duration: 5000
                                                    // }
                                                ],
                                                onChapterExit: [
                                                    // {
                                                    //     layer: 'layer-name',
                                                    //     opacity: 0
                                                    // }
                                                ]
                                            },
                                                {
                                                    id: 'Chapter-13-1953-Bus-Boycott',
                                                    alignment: 'left',
                                                    hidden: false,
                                                    title: 'Mt. Zion First Baptist Church and the 1953 Bus Boycott',
                                                    image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/BR Bus Boycott.jpg',
                                                    description: 'The 1953 Baton Rouge Bus Boycott was a grassroots effort organized by the Black community in Baton Rouge, led by Reverend T. J. Jemison. Despite lasting only five days, the organized and large-scale effort to force the city to integrate the city bus system made national news and inspired other civil rights leaders across the South. Just over two years later, Martin Luther King, Jr. worked with Reverend Jemison to take the lessons learned in Baton Rouge and apply them to the Montgomery Bus Boycott.',
                                                    footer:'Information and image sourced from <a href="https://64parishes.org/entry/baton-rouge-bus-boycott"> 64 Parishes./a>',
                                                    location: {
                                                        center: [30.445466355743665, -91.18059208035847],
                                                        zoom: 16.13,
                                                        pitch: 60,
                                                        bearing: 44
                                                    },
                                                    mapAnimation: 'flyTo',
                                                    rotateAnimation: false,
                                                    callback: '',
                                                    onChapterEnter: [
                                                        // {
                                                        //     layer: 'layer-name',
                                                        //     opacity: 1,
                                                        //     duration: 5000
                                                        // }
                                                    ],
                                                    onChapterExit: [
                                                        // {
                                                        //     layer: 'layer-name',
                                                        //     opacity: 0
                                                        // }
                                                    ]
                                                },
                                                    {
                                                        id: 'Chapter-14-The-Lincoln-Theater',
                                                        alignment: 'left',
                                                        hidden: false,
                                                        title: 'The Lincoln Theater',
                                                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Lincoln Theater.jpg',
                                                        description: 'The Lincoln Theater was the only movie theater open to Black residents in Old South Baton Rouge during the Civil Rights movement. The theater also served as a gathering place for Civil Rights leaders to plan the 1953 Bus Boycott.',
                                                        footer:'Information from <a href="https://www.theadvocate.com/baton_rouge/news/article_2832abae-3c25-11e8-8256-ff464114e3ce.html"> The Advocate/a> and images from <a href="http://cinematreasures.org/theaters/685"> Cinerama Treasures./a>',
                                                        location: {
                                                            center: [30.439330915697404, -91.17528055707352],
                                                            zoom: 16.13,
                                                            pitch: 60,
                                                            bearing: 44
                                                        },
                                                        mapAnimation: 'flyTo',
                                                        rotateAnimation: false,
                                                        callback: '',
                                                        onChapterEnter: [
                                                            // {
                                                            //     layer: 'layer-name',
                                                            //     opacity: 1,
                                                            //     duration: 5000
                                                            // }
                                                        ],
                                                        onChapterExit: [
                                                            // {
                                                            //     layer: 'layer-name',
                                                            //     opacity: 0
                                                            // }
                                                        ]
                                                    },
                                                        {
                                                            id: 'Chapter-15-Hotel-Lincoln',
                                                            alignment: 'left',
                                                            hidden: false,
                                                            title: 'Hotel Lincoln',
                                                            image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Hotel Lincoln.jpg',
                                                            description: 'Hotel Lincoln opened in 1955 and was the local hotel for Black visitors in Baton Rouge. Guests included James Brown, Aretha Franklin, B.B. King, and Nat King Cole. It went out of business and closed in the 1970s. Today, the hotel is being transformed into a mixed-use residential and retail building.',
                                                            footer:'Information and images from The Advocate, <a href="https://www.theadvocate.com/baton_rouge/news/business/article_9ed661a0-0d0f-11e8-b7f6-8b64b5814d5e.html"> "Former Owners,"/a> and from <a href="https://www.theadvocate.com/baton_rouge/news/business/article_16e903ee-d3e0-11e9-b42d-db6634e35f15.html"> "Historic Hotel Lincoln"./a>',
                                                            location: {
                                                                center: [30.444576380142486, -91.17585919570122],
                                                                zoom: 16.13,
                                                                pitch: 60,
                                                                bearing: 44
                                                            },
                                                            mapAnimation: 'flyTo',
                                                            rotateAnimation: false,
                                                            callback: '',
                                                            onChapterEnter: [
                                                                // {
                                                                //     layer: 'layer-name',
                                                                //     opacity: 1,
                                                                //     duration: 5000
                                                                // }
                                                            ],
                                                            onChapterExit: [
                                                                // {
                                                                //     layer: 'layer-name',
                                                                //     opacity: 0
                                                                // }
                                                            ]
                                                        },
                                                            {
                                                                id: 'Chapter-16-I10',
                                                                alignment: 'left',
                                                                hidden: false,
                                                                title: 'I-10 and the Valley Park Neighborhood',
                                                                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/ValleyParkFreeway.jpg',
                                                                description: '"In 1958, the State of Louisiana planned to extend Interstate 10 through East Baton Rouge Parish. The interstate would extend from the Mississippi River Bridge to the existing Airline Highway, a distance of about eight miles dividing the city in two parts. Many African American communities saw previous stable communities split in half by the interstate development. The community of Valley Park, located near the southern point of Baton Rouge, represents the many African American communities affected by the construction."',
                                                                footer:'Information and images from <a href="http://www.louisianafolklife.org/LT/Articles_Essays/lfmvalleypark.html"> Louisiana Folklife./a>',
                                                                location: {
                                                                    center: [30.425368155927554, -91.14631776447669],
                                                                    zoom: 16.13,
                                                                    pitch: 60,
                                                                    bearing: 44
                                                                },
                                                                mapAnimation: 'flyTo',
                                                                rotateAnimation: false,
                                                                callback: '',
                                                                onChapterEnter: [
                                                                    // {
                                                                    //     layer: 'layer-name',
                                                                    //     opacity: 1,
                                                                    //     duration: 5000
                                                                    // }
                                                                ],
                                                                onChapterExit: [
                                                                    // {
                                                                    //     layer: 'layer-name',
                                                                    //     opacity: 0
                                                                    // }
                                                                ]
                                                            },
                                                                {
                                                                    id: 'Chapter-17-Chase-Bank-Building',
                                                                    alignment: 'left',
                                                                    hidden: false,
                                                                    title: 'Chase Bank Building',
                                                                    image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Chase Building.jpg',
                                                                    description: 'The Chase Bank building, which opened in 1967, is a pillar of the Baton Rouge skyline. Historic building tax credits are currently being used to redevelop the property, making space for a mix of residential and office units.',
                                                                    footer:'Information and images from <a href="https://www.theadvocate.com/baton_rouge/news/business/article_1d5987f4-d237-11e8-86b4-7fadc8ec471b.html"> The Advocate./a>',
                                                                    location: {
                                                                        center: [30.453056725372885, -91.09381708775368],
                                                                        zoom: 16.13,
                                                                        pitch: 60,
                                                                        bearing: 44
                                                                    },
                                                                    mapAnimation: 'flyTo',
                                                                    rotateAnimation: false,
                                                                    callback: '',
                                                                    onChapterEnter: [
                                                                        // {
                                                                        //     layer: 'layer-name',
                                                                        //     opacity: 1,
                                                                        //     duration: 5000
                                                                        // }
                                                                    ],
                                                                    onChapterExit: [
                                                                        // {
                                                                        //     layer: 'layer-name',
                                                                        //     opacity: 0
                                                                        // }
                                                                    ]
                                                                },
                                                                    {
                                                                        id: 'Chapter-18-Eden-Park-Community-Center',
                                                                        alignment: 'left',
                                                                        hidden: false,
                                                                        title: 'Dr. Martin Luther King, Jr./Eden Park Community Center and Pearl George',
                                                                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Pearl George.jpg',
                                                                        description: 'Pearl George was born and raised  in Baton Rouge. George was hugely influential in the civil rights movement, participating in the 1963 sit-in to integrate the Parish courthouse and in the efforts in July 1963 to integrate the pool at City Park. Georges work continued, as she pushed for integration, fair hiring practices, and an improved public transit system. In 1977, she was the elected as the first African-American woman to serve on the Parish Metro Council. In 1979, she founded the Eden Park Community Center, and in 1982, the Baton Rouge Food Bank. Listen <a href="https://youtu.be/iNJhQ0EOIZo"> here./a> here to Georges interview, conducted as part of a project to remember the Civil Rights Movement in Baton Rouge, called "Remembering the Struggle."',
                                                                        footer:'Learn more <a href="https://artsandculture.google.com/exhibit/her-story-of-east-baton-rouge-parish-east-baton-rouge-parish-library/sQJC7k6sXJHZLA?hl=en"> here./a>',
                                                                        location: {
                                                                            center: [30.462411773313534, -91.14906940309285],
                                                                            zoom: 16.13,
                                                                            pitch: 60,
                                                                            bearing: 44
                                                                        },
                                                                        mapAnimation: 'flyTo',
                                                                        rotateAnimation: false,
                                                                        callback: '',
                                                                        onChapterEnter: [
                                                                            // {
                                                                            //     layer: 'layer-name',
                                                                            //     opacity: 1,
                                                                            //     duration: 5000
                                                                            // }
                                                                        ],
                                                                        onChapterExit: [
                                                                            // {
                                                                            //     layer: 'layer-name',
                                                                            //     opacity: 0
                                                                            // }
                                                                        ]
                                                                    },
                                                                        {
                                                                            id: 'Chapter-19-EBR-School-Board-Building',
                                                                            alignment: 'left',
                                                                            hidden: false,
                                                                            title: 'Eva LeGard and the EBR School Board Building',
                                                                            image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Eva LeGard.jpg',
                                                                            description: 'Eva LeGard was born in Lafayette and moved to Baton Rouge in junior high. After attending McKinley High School and later working in the registrars office at Southern University, she became the first African American woman on the East Baton Rouge school board in 1980. Listen to her recorded oral history <a href="https://soundcloud.com/batonrougeroomoralhistory/eva-legard-ywca-remebering-the-struggle-oral-history-project"> here/a> to learn more about her impact on Baton Rouge.',
                                                                            footer:'Information and resources from <a href="https://www.wafb.com/2019/07/20/polk-elementary-be-renamed-after-first-black-female-ebr-school-board-member/"> The Advocate/a> and the <a href="https://www.lib.lsu.edu/sites/all/files/oralhistory/abstracts/mckinley/1_history/Legard_Eva_T908.pdf"> LSU Library Collection./a>',
                                                                            location: {
                                                                                center: [30.434033655484768, -91.17476067241799],
                                                                                zoom: 16.13,
                                                                                pitch: 60,
                                                                                bearing: 44
                                                                            },
                                                                            mapAnimation: 'flyTo',
                                                                            rotateAnimation: false,
                                                                            callback: '',
                                                                            onChapterEnter: [
                                                                                // {
                                                                                //     layer: 'layer-name',
                                                                                //     opacity: 1,
                                                                                //     duration: 5000
                                                                                // }
                                                                            ],
                                                                            onChapterExit: [
                                                                                // {
                                                                                //     layer: 'layer-name',
                                                                                //     opacity: 0
                                                                                // }
                                                                            ]
                                                                        },
                                                                            {
                                                                                id: 'Chapter-20-Country-Club-of-Louisiana',
                                                                                alignment: 'left',
                                                                                hidden: false,
                                                                                title: 'Master P and the Country Club of Louisiana',
                                                                                image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Master P.jpeg',
                                                                                description: 'Master P, rapper and founder of No Limit record label, was the first African American to own a home in the Country Club of Louisiana. In his time at the Country Club of Louisiana, he was neighbors with a former governor, several other No Limit artists (including Snoop Dogg), and was featured on MTV Cribs. More of this history can be heard in the podcast <a href="https://podcasts.apple.com/us/podcast/the-camouflage-assassin-mac-phipps-pt-1/id1532093071?i=1000493997048"> Louder Than  a Riot,/a> which covers the intersections of mass incarceration and hip hop.',
                                                                                footer:'Information and resources from Louder than a Riot, S1E1, "The Camouflage Assassin" and <a href="https://www.mtv.com/video-clips/0qvrb0/mtv-news-mtv-cribs-master-p"> MTV Cribs/a> and the <a href="https://www.lib.lsu.edu/sites/all/files/oralhistory/abstracts/mckinley/1_history/Legard_Eva_T908.pdf"> LSU Library Collection./a>',
                                                                                location: {
                                                                                    center: [30.343444958805865, -91.0362758110801],
                                                                                    zoom: 16.13,
                                                                                    pitch: 60,
                                                                                    bearing: 44
                                                                                },
                                                                                mapAnimation: 'flyTo',
                                                                                rotateAnimation: false,
                                                                                callback: '',
                                                                                onChapterEnter: [
                                                                                    // {
                                                                                    //     layer: 'layer-name',
                                                                                    //     opacity: 1,
                                                                                    //     duration: 5000
                                                                                    // }
                                                                                ],
                                                                                onChapterExit: [
                                                                                    // {
                                                                                    //     layer: 'layer-name',
                                                                                    //     opacity: 0
                                                                                    // }
                                                                                ]
                                                                            },
                                                                                {
                                                                                    id: 'Chapter-21-Now-And-Then-Museum',
                                                                                    alignment: 'left',
                                                                                    hidden: false,
                                                                                    title: 'Odell S. Williams Now and Then Museum',
                                                                                    image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Now and Then.jpg',
                                                                                    description: 'The Odell S. Williams Now and Then Museum was founded in 2001 by Sadie Roberts-Joseph as Baton Rouges only Black history museum, and remains the only Black history museum in Baton Rouge in 2021. It is named for the Baton Rouge educator Odell S. Williams, who, during the 50s and at "the risk of job and personal safety, "was teaching Black history to students at three public schools in East Baton Rouge parish. in 2020, the Baton Rouge Metro Council voted to relocate the museum to a city-parish building, in agreement with the family of Sadie Roberts-Joseph so that the museum could expand.',
                                                                                    footer:'Information and resources from <a href="https://blog.seattlepi.com/ramblinman/2013/03/16/baker-louisiana-day-6/"> Seattle PI/a> and <a href="https://www.braamuseum.org/"> Baton Rouge African American Museum website./a>',
                                                                                    location: {
                                                                                        center: [30.440342508132485, -91.1850537417306],
                                                                                        zoom: 16.13,
                                                                                        pitch: 60,
                                                                                        bearing: 44
                                                                                    },
                                                                                    mapAnimation: 'flyTo',
                                                                                    rotateAnimation: false,
                                                                                    callback: '',
                                                                                    onChapterEnter: [
                                                                                        // {
                                                                                        //     layer: 'layer-name',
                                                                                        //     opacity: 1,
                                                                                        //     duration: 5000
                                                                                        // }
                                                                                    ],
                                                                                    onChapterExit: [
                                                                                        // {
                                                                                        //     layer: 'layer-name',
                                                                                        //     opacity: 0
                                                                                        // }
                                                                                    ]
                                                                                },
                                                                                    {
                                                                                        id: 'Chapter-22-Plank-Road',
                                                                                        alignment: 'left',
                                                                                        hidden: false,
                                                                                        title: 'Delmont Village Shopping Center and Plank Road Corridor',
                                                                                        image: '/Users/sydneyanderson1/Downloads/storytelling-main/src/images/Tonys Seafood.jpeg',
                                                                                        description: 'The Delmont Village Shopping Center, home to Tony's Seafood, is a fixture of Baton Rouge's historic Plank Road. Plank Road grew into a major developmental zone in mid-century Baton Rouge, drawing patrons from across the city. As desegration and the civil rights movement came to prominence in the latter half of the twentieth century, the neighborhoods on and surrounding Plank Road were left blighted and abandoned as a result of white flight and racist urban policy. Today, organizations across Baton Rouge and the nation are coming together to reimagine and equitably redevelop Baton Rouge.',
                                                                                        footer:'Information and resources from Build Baton Rouge, <a href="https://buildbatonrouge.org/wp-content/uploads/2020/02/Imagine-Plank-Road_Summary_2019.11.01_web.pdf"> "Imagine Plank Road."/a>',
                                                                                        location: {
                                                                                            center: [30.496195577374287, -91.1570033263679],
                                                                                            zoom: 16.13,
                                                                                            pitch: 60,
                                                                                            bearing: 44
                                                                                        },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};

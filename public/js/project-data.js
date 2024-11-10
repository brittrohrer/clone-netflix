const fullList = [
    {
            category: "movie",
            title: `Don't Move`,
            description: `Movie Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.heavenofhorror.com/wp-content/uploads/2024/10/Dont-Move-Netflix-Horror-Review.jpg`,
            featurepic: `https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VL_01322_R.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400`,
            rating: `R`,
            time: `1h 2m`,
            genre: [`Thriller`, `Action`],
            mylist: false,
            watching: true,
            language : `english`,
        },
        {
            category: "movie",
            title: `Women of the Hour`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.cinematographe.it/wp-content/uploads/2024/09/maxresdefault-3.jpg`,
            featurepic: `https://www.hollywoodreporter.com/wp-content/uploads/2024/10/TDG_01386r.jpg?w=1296`,
            rating: `R`,
            time: `1h 20m`,
            genre: [`Action`, `Suspense`, `Drama`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `Emily in Paris`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.koimoi.com/wp-content/new-galleries/2024/01/emily-in-paris-season-4-release-date-production-cast-trailer-more-all-you-need-to-know-about-lily-collins-netflix-series.jpg`,
            featurepic: `https://lionstale.org/wp-content/uploads/2022/01/emily-in-paris.jpeg`,
            rating: `TV-14`,
            seasons: `3 seasons`,
            genre: [`Comedy`, `Adventure`, `Rom-Com`],
            mylist: true,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `The Night Agent`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRTyNqGN71jPGYh8ODB1hjlPg4ScqQfe_geHYoDI_OuZ1BViJUICKKs0OfX2fBsxoPoGcekinCuBswnaVOEtMm8Krfokj3qHbIvKEZ3IRU6cv47C1H0JHVR2_2FQlzOjgjB60A.webp?r=71f`,
            featurepic: `https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQeKVf6_zRq3QNYeqa9NKkVBnd3BkJqoArxf2vBXF03QMgBdeWdhgRaJHTzxAwh6JmGbrZ9IcirVk3AdQhN8tpFySB6MXr_tvtxLlyT3wgwXO8LL1rsdGVTOY4L6ZGr6Y6z5m1dLH2wJrMV3RATle8fHgvqY.jpg?r=eb1`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Action`, `Adventure`, `Mystery`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Extraction 2`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://ntvb.tmsimg.com/assets/p23711562_v_h8_ad.jpg?w=1280&h=720`,
            featurepic: `https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQoMYdE3xLbuCqKPtsFl526Il3X_GdHBpx713QV0dR8LUPkwGByJ1Dy-B0SHkrG20V7Sxc4MLyN56ZuPDaH5UIN-4qhJ5ImRhWwVSdLjouvqIxIhPO8ZS9tlQ_d8nPxewbav--bLhlj9OQ_-riOpDiIVE3M.jpg?r=ade`,
            rating: `R`,
            time: `1h 20m`,
            genre: [`Action`, `Suspense`, `Drama`],
            mylist: true,
            watching: true,
            language : `english`,
        },
        {
            category: "tv",
            title: `Squid Game`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://ntvb.tmsimg.com/assets/p20492187_b_h8_aa.jpg?w=1280&h=720`,
            featurepic: `https://people.com/thmb/ecYD6EXh7-UTPN_dnka8P5Odtcs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1159x212:1161x214)/squid-game-1-7d9b00a291e34338b3e45a113d2b0014.jpg`,
            rating: `TV-M`,
            seasons: `12 Episodes`,
            genre: [`Thriller`, `Adventure`, `Dark`],
            mylist: true,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Extraction`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ykugVUVMj8TSbh-IaHJ_uoosFw65otV4DQ&s`,
            featurepic: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVqcLQpf6mxvyIfcaadFQhph_iN1tmNUjmHziE4hXp6HsNL0ViweqrNA3JUqdX_ukwGIWZzli2G4cry-1PYBFRk22_a8C2LG86Cj.jpg?r=1ef`,
            rating: `R`,
            time: `1h 20m`,
            genre: [`Action`, `Suspense`, `Drama`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Bird Box`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.whats-on-netflix.com/wp-content/uploads/2018/12/Bird-Box-Netflix-Film-Preview-1.jpg`,
            featurepic: `https://media.newyorker.com/photos/5c2cf69341e4c73c088d766c/16:9/w_1280,c_limit/Brody-BirdBox.jpg`,
            rating: `R`,
            time: `1h 20m`,
            genre: [`Action`, `Suspense`, `Thriller`],
            mylist: true,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Ice Road`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://ntvb.tmsimg.com/assets/p19339994_v_h8_ak.jpg?w=1280&h=720`,
            featurepic: `https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSQcTWH5Ag__vU0HmvagRZm9qFNtGyO6ERVTZSyJCBM80OJxELC6Hm30sKopg_DD_vvaaonBf5b6P--FAjoVx7LzRINLUHHUBY2S.jpg?r=b7f`,
            rating: `R`,
            time: `1h 20m`,
            genre: [`Action`, `Suspense`, `Thriller`],
            mylist: true,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `Wednesday`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg`,
            featurepic: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeMZkNnHuV8Y6pFrWEjxEZG8xvjo-JqEJzrBVbBo76pxXC9QOCBcJZZU0KjD8hONdRR6x9QAGgpUZCLr0ljFcZlBS1gjBo-Y5D6-.jpg?r=570`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Action`, `Sci-fi`, `Adventure`],
            mylist: false,
            watching: true,
            language : `english`,
        },
        {
            category: "tv",
            title: `Maid`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://www.carlsonattorneys.com/wp-content/uploads/2020/10/Maid-poster-1280x720.jpg`,
            featurepic: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWtBdYeFeLwDilSG3K6P7KGdj7zC04dLHZuEKKTGCU4F7g9D5z0ZnAi4EEbxSexOoDFJE3MzLf5xFLJZmd44sStByTE114_6QqAw.jpg?r=92d`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Drama`, `Narrative`],
            mylist: false,
            watching: true,
            language : `english`,
        },
        {
            category: "tv",
            title: `Blown Away`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://ntvb.tmsimg.com/assets/p19255780_b_h8_aa.jpg?w=1280&h=720`,
            featurepic: `https://i0.wp.com/talkingoutyourglass.com/wp-content/uploads/2021/01/BlownAway_Season2_Episode5_00_13_28_04-scaled.jpg`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Reality`, 'Competition'],
            mylist: false,
            watching: true,
            language : `english`,
        },
        {
            category: "tv",
            title: `Queen's Gambit`,
            description: `Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://9meters.com/wp-content/uploads/the-queens-gambit.webp`,
            featurepic: `https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQe2OOEAhr5nAPNUI0wORP637W0k7hvcpDX40J6mup3ke1qqQ7Hqdy_i9qTdJQmX7Uv0S5CEC4hgT_-zPzEb8PRExMVImVKrJ8EeSzdMw73IFF4HdSfq_L9o78Lm9IhYboXqZJdP3WlYa3Q9E-wYlhoFUTHw.jpg?r=2c3`,
            rating: `TV-14`,
            seasons: `10 Episodes`,
            genre: [`Drama`, `Adventure`],
            mylist: true,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Holidate`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://occ-0-90-92.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQogrkCg4wtS242pf1n9Dhc7rLvy7hsGE6hK0ne-wJCIt32xVgO6nJhxeVcAYop5h-bNONoV2baiJ2vr7eOSXjwAgmAWw4akl-OVsiiYKA7aJr5OlCTwdhFKtLnsfmfqdE8A.jpg?r=6fa`,
            featurepic: `https://media.glamour.com/photos/5fa3f1b153352ad65a5498a4/16:9/w_1280,c_limit/Holidate_Unit_02533_R.jpg`,
            rating: `PG-13`,
            time: `1h 20m`,
            genre: [`Rom-Com`, `Comedy`, `Drama`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Spenser Confidential`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Spenser-Confidential-Netflix-Robert-B-Parker-Wonderland.jpg`,
            featurepic: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZJM3Edt4JT1CF9CyCyxr5orGF5vAhqKjxFgJTvCN8wByMCrvrJIkD-6OGPLszxqHkoleckcnQ71DCk-fdiaLK8PwjZEISJghA_x.jpg?r=9f3`,
            rating: `PG-13`,
            time: `1h 20m`,
            genre: [`Action`, `Drama`, `Comedy`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `Ozark`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/ozark-cast-character-guide.jpg`,
            featurepic: `https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQegiP9ERNuNqZ7-8d_JlYWFW9FazEbPy77KiZEYRgLVrB1Hyn-UW1r_PjiZO1W88yvAc_mAeeH5CB4nUq0ujSHCVxrNWudVf5GAb4TNjva3oqW_KIe8WVV03IiCWD5oGTfd38JUe8jq7WEv_WuYqzR9rciA.jpg?r=869`,
            rating: `TV-M`,
            seasons: `4 Seasons`,
            genre: [`Thriller`, `Suspense`, `Drama`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `Stranger Things`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://mir-s3-cdn-cf.behance.net/project_modules/1400/8a6a68144592045.628efcd3e77b5.jpg`,
            featurepic: `https://assets.teenvogue.com/photos/6436c21b4ea1fdd79f2d6c94/16:9/w_1280,c_limit/StrangerThings_S3_Illustrated_Vertical_FINAL_RGB_Digital__EN.jpg`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Mystery`, `Sci-fi`, `Thriller`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "tv",
            title: `Sugar Rush`,
            description: `Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://geekd-out.com/wp-content/uploads/2018/08/sugar-rush-featured-image.jpg`,
            featurepic: `https://www.justwatch.com/images/backdrop/193227462/s640/season-1/season-1`,
            rating: `TV-14`,
            seasons: `12 Episodes`,
            genre: [`Reality`, `Comedy`],
            mylist: false,
            watching: false,
            language : `english`,
        },
        {
            category: "movie",
            title: `Couple's Retreat`,
            description: `Movie Description 2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, metus varius iaculis volutpat, dolor nisi consequat tellus.`,
            thumbnail: `https://m.media-amazon.com/images/S/pv-target-images/c34ed88f364dce96f8c596869053b22c4e336ebecf6e53a9e872f9219ef62ef7.jpg`,
            featurepic: `https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXI4cNM9JX3OtTVwTVyYsvQWkPUpFhzDba2OgGK0EFigtSLZlBUp-Oir9O5J4IQ4jTtQgJ5s6NSusu3LvQ_P30pmLzQTmM1UsKEG.jpg?r=46e`,
            rating: `PG-13`,
            time: `1h 20m`,
            genre: [`Feel-Good`, `Adventure`, `Comedy`],
            mylist: false,
            watching: false,
            language : `english`,
        },
]

    console.log(fullList);
    export{fullList};

    // Movies
    const movieList = fullList.filter((movie) => {
        return movie.category === 'movie';
    });
    export{movieList};

    // My list
    const myList = fullList.filter((myvideo) => {
        return myvideo.mylist === true;
    });
    export{myList};

    // TV Shows
    const showsList = fullList.filter((show) => {
        return show.category === 'tv';
    });
    export{showsList};

    // Currently Watching
    const watchingList = fullList.filter((video) => {
        return video.watching === true;
    });
    export{watchingList};

    // Language: English
    const englishList = fullList.filter((video) => {
        return video.language === "english";
    });
    export{englishList};

    // TV Genres
        // Action
        const tvactionList = showsList.filter((video) => {
            return video.genre.includes("Action");
        });
        export{tvactionList};
        // Thriller
        const tvthrillerList = showsList.filter((video) => {
            return video.genre.includes("Thriller");
        });
        export{tvthrillerList};
        // Comedy
        const tvcomedyList = showsList.filter((video) => {
            return video.genre.includes("Comedy");
        });
        export{tvcomedyList};
        // Reality 
        const tvrealityList = showsList.filter((video) => {
            return video.genre.includes("Reality");
        });
        export{tvrealityList};

    // Movie Genres
        //Action
        const mvactionList = movieList.filter((video) => {
            return video.genre.includes("Action");
        });
        export{mvactionList};
        // Thriller
        const mvthrillerList = movieList.filter((video) => {
            return video.genre.includes("Thriller");
        });
        export{mvthrillerList};
        // Comedy
        const mvcomedyList = movieList.filter((video) => {
            return video.genre.includes("Comedy");
        });
        export{mvcomedyList};



    // New and popular 
    const tvnewList = showsList.slice(0,4);
    export{tvnewList};
    const mvnewList = movieList.slice(0,4);
    export{mvnewList};
    const featureItem = fullList.slice(0,3);
    export{featureItem};
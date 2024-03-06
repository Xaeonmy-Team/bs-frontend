const cats = [
  {
    name: "Kanye West",
    discography: "https://www.allmusic.com/artist/kanye-west-mn0000361014",
    tours: "https://www.songkick.com/artists/552177-kanye-west",
    instagram: "https://www.instagram.com/kanyewest/",
    spotify: "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x",
    video: "https://www.youtube.com/watch?v=401hZy6Hipw",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/220627085303-kanye-west-bet-0626.jpg?c=original",
  },
  {
    name: "Kid Cudi",
    discography: "https://www.allmusic.com/artist/kid-cudi-mn0001011323",
    tours: "https://www.songkick.com/artists/2313347-kid-cudi",
    instagram: "https://www.instagram.com/kidcudi/",
    spotify: "https://open.spotify.com/artist/0fA0VVWsXO9YnASrzqfmYu",
    video: "https://www.youtube.com/watch?v=F5vPmRPCp50",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.complex.com%2Fmusic%2Fa%2Fbackwoodsaltar%2Fkid-cudi-no-more-albums-after-entergalactic&psig=AOvVaw2ebljgVDKdF4jtTk333UaG&ust=1709248480876000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKj-rPmUz4QDFQAAAAAdAAAAABAJ",
  },
  {
    name: "The Vitals 808",
    discography: "https://thevitals808.com/buy-music",
    tours: "https://www.songkick.com/artists/217815-taylor-swift",
    instagram: "https://www.instagram.com/thevitals808/",
    spotify: "https://open.spotify.com/artist/3m4goud5xBckxremZJ7Y2j",
    video: "https://www.youtube.com/watch?v=XjnK_mIGVYQ",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fchannel%2FUCUpnrBBvkxRznZrzT1ase1w&psig=AOvVaw25re9Shu1PCzbDTdThm28v&ust=1709248578263000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKD1kqiVz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "Three Plus",
    discography: "https://www.allmusic.com/artist/three-plus-mn0000491245",
    tours: "https://www.songkick.com/artists/217815-taylor-swift",
    instagram: "https://www.instagram.com/threeplushawaii/",
    spotify: "https://open.spotify.com/artist/7z2qgJSiP0Wk0vzHzPO0SL",
    video: "https://www.youtube.com/watch?v=0Ng_izLRPR8",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenius.com%2Fartists%2FThree-plus&psig=AOvVaw0Zw9euHli_sDDm3FqEZEmT&ust=1709248632038000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLD2tMGVz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "Joji",
    discography: "https://www.allmusic.com/artist/joji-mn0001064208",
    tours: "https://www.songkick.com/artists/9214309-joji",
    instagram: "https://www.instagram.com/sushitrash/",
    spotify: "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq",
    video: "https://www.youtube.com/watch?v=llFdrwnBwLE",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.billboard.com%2Fmusic%2Fmusic-news%2Fjoji-quarantine-playlist-9347801%2F&psig=AOvVaw0z94TjVPmP4l_VmmuGi0Tw&ust=1709248745130000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODG8PaVz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "King Krule",
    discography: "https://www.allmusic.com/album/king-krule-mw0002254324",
    tours: "https://www.songkick.com/artists/4403968-king-krule",
    instagram: "https://www.instagram.com",
    spotify: "https://open.spotify.com/artist/4wyNyxs74Ux8UIDopNjIai",
    video: "https://www.youtube.com/watch?v=k2HRzIyyXvU",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kaleidoscope.media%2Fmagazine%2F42%2Fking-krule&psig=AOvVaw1iAals1CRONcpUSFZPf-GH&ust=1709248801165000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjI75GWz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "Andre Benjamin",
    discography: "https://www.allmusic.com/artist/andr%C3%A9-3000-mn0000750249",
    tours: "https://www.songkick.com/artists/2307269-andre-3000",
    instagram: "https://www.instagram.com/andre3000/",
    spotify: "https://open.spotify.com/artist/74V3dE1a51skRkdII8y2C6",
    video: "https://www.youtube.com/watch?v=o-AbEO6J8s0",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2023%2F11%2F14%2F1212661071%2Fandre-3000-album&psig=AOvVaw0fBnoykoi6my_3OBwyUYUG&ust=1709249074129000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJD1opSXz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "J-Boog",
    discography: "https://www.allmusic.com/artist/kanye-west-mn0000361014",
    tours: "https://www.songkick.com/artists/1077783-j-boog",
    instagram: "https://www.instagram.com/jboogmusic/",
    spotify: "https://open.spotify.com/artist/7oEWmZ9dKlAVxTgmjUbYr4",
    video: "https://www.youtube.com/watch?v=q6fgVVlPl08",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.holoholofestival.com%2Fj-boog%2F&psig=AOvVaw3pANHEisfR2tAQ89P8SLtv&ust=1709249122537000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDN4quXz4QDFQAAAAAdAAAAABAI",
  },
  {
    name: "Alpha Wann",
    discography: "https://www.allmusic.com/artist/alpha-wann-mn0002886875",
    tours: "https://www.songkick.com/artists/7661959-alpha-wann",
    instagram: "https://www.instagram.com/alphawann/",
    spotify: "https://open.spotify.com/artist/7yeFMUrYTY5cAZx0GKXnti",
    video: "https://www.youtube.com/watch?v=2UMML7hPDec",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.throwup.it%2Fen%2Fmusic%2Fthrowup-worldwide-en%2Falla-scoperta-di-alpha-wann%2F&psig=AOvVaw2HrgbhHMtXsONwhrNX26uo&ust=1709249266685000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDqs--Xz4QDFQAAAAAdAAAAABAE",
  },
  {
    name: "Ekolu",
    discography: "https://www.allmusic.com/artist/ekolu-mn0000181770",
    tours: "https://www.songkick.com/artists/441659-ekolu",
    instagram: "https://www.instagram.com/ekolumusic/",
    spotify: "https://open.spotify.com/artist/3DK8L6LNTwmg5l3KfzgcRx",
    video: "https://www.youtube.com/watch?v=AtUaQoGBnSo",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.throwup.it%2Fen%2Fmusic%2Fthrowup-worldwide-en%2Falla-scoperta-di-alpha-wann%2F&psig=AOvVaw2HrgbhHMtXsONwhrNX26uo&ust=1709249266685000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDqs--Xz4QDFQAAAAAdAAAAABAE",
  },
]

export default cats;
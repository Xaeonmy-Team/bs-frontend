const artists = [
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3sZoJt0BMYZYzLMEI0jtSD3ISByI8KYAgQ&usqp=CAU",
  },
  {
    name: "The Vitals 808",
    discography: "https://thevitals808.com/buy-music",
    tours: "https://www.songkick.com/artists/217815-taylor-swift",
    instagram: "https://www.instagram.com/thevitals808/",
    spotify: "https://open.spotify.com/artist/3m4goud5xBckxremZJ7Y2j",
    video: "https://www.youtube.com/watch?v=XjnK_mIGVYQ",
    image:
      "https://d10j3mvrs1suex.cloudfront.net/s:bzglfiles/u/164665/fb0b2dec48f9e6dbb8734f1b13597c659e3c6b98/original/dsc09192.jpg/!!/b%3AW1sicmVzaXplIiwxODAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
  },
  {
    name: "Three Plus",
    discography: "https://www.allmusic.com/artist/three-plus-mn0000491245",
    tours: "https://www.songkick.com/artists/217815-taylor-swift",
    instagram: "https://www.instagram.com/threeplushawaii/",
    spotify: "https://open.spotify.com/artist/7z2qgJSiP0Wk0vzHzPO0SL",
    video: "https://www.youtube.com/watch?v=0Ng_izLRPR8",
    image:
      "https://images.genius.com/29489e7475b5f87b80432b5cd123bb2a.364x364x1.jpg",
  },
  {
    name: "Joji",
    discography: "https://www.allmusic.com/artist/joji-mn0001064208",
    tours: "https://www.songkick.com/artists/9214309-joji",
    instagram: "https://www.instagram.com/sushitrash/",
    spotify: "https://open.spotify.com/artist/3MZsBdqDrRTJihTHQrO6Dq",
    video: "https://www.youtube.com/watch?v=llFdrwnBwLE",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Joji_-_Nectar.png",
  },
  {
    name: "King Krule",
    discography: "https://www.allmusic.com/album/king-krule-mw0002254324",
    tours: "https://www.songkick.com/artists/4403968-king-krule",
    instagram: "https://www.instagram.com",
    spotify: "https://open.spotify.com/artist/4wyNyxs74Ux8UIDopNjIai",
    video: "https://www.youtube.com/watch?v=k2HRzIyyXvU",
    image:
      "https://media.gq.com/photos/5e69073d86f82a0009bd171e/4:3/w_2999,h_2249,c_limit/king-krule-gq-april-2020-promo.jpg",
  },
  {
    name: "Andre Benjamin",
    discography: "https://www.allmusic.com/artist/andr%C3%A9-3000-mn0000750249",
    tours: "https://www.songkick.com/artists/2307269-andre-3000",
    instagram: "https://www.instagram.com/andre3000/",
    spotify: "https://open.spotify.com/artist/74V3dE1a51skRkdII8y2C6",
    video: "https://www.youtube.com/watch?v=o-AbEO6J8s0",
    image:
      "https://miro.medium.com/v2/resize:fit:967/1*K9IzqIamY3ZmGiewl9O70w.jpeg",
  },
  {
    name: "J-Boog",
    discography: "https://www.allmusic.com/artist/kanye-west-mn0000361014",
    tours: "https://www.songkick.com/artists/1077783-j-boog",
    instagram: "https://www.instagram.com/jboogmusic/",
    spotify: "https://open.spotify.com/artist/7oEWmZ9dKlAVxTgmjUbYr4",
    video: "https://www.youtube.com/watch?v=q6fgVVlPl08",
    image:
      "https://f4.bcbits.com/img/0034480721_10.jpg",
  },
  {
    name: "Alpha Wann",
    discography: "https://www.allmusic.com/artist/alpha-wann-mn0002886875",
    tours: "https://www.songkick.com/artists/7661959-alpha-wann",
    instagram: "https://www.instagram.com/alphawann/",
    spotify: "https://open.spotify.com/artist/7yeFMUrYTY5cAZx0GKXnti",
    video: "https://www.youtube.com/watch?v=2UMML7hPDec",
    image:
      "https://core.colorsxstudios.com/wp-content/uploads/2021/03/ALPHA_WANN_Website_ArtistPic-1-1800x2250.jpg",
  },
  {
    name: "Ekolu",
    discography: "https://www.allmusic.com/artist/ekolu-mn0000181770",
    tours: "https://www.songkick.com/artists/441659-ekolu",
    instagram: "https://www.instagram.com/ekolumusic/",
    spotify: "https://open.spotify.com/artist/3DK8L6LNTwmg5l3KfzgcRx",
    video: "https://www.youtube.com/watch?v=AtUaQoGBnSo",
    image:
      "https://riddimhouse.files.wordpress.com/2015/08/wpid-2015-08-01-14-57-58.png",
  },
  { 
    name: "Taylor Swift",
    discography: "https://www.allmusic.com/artist/taylor-swift-mn0000472102#discography",
    tours: "https://www.songkick.com/artists/217815-taylor-swift",
    instagram: "https://www.instagram.com/taylorswift/",
    spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
    video: "https://www.youtube.com/watch?v=5UMCrq-bBCg&list=PLYbgbIXBJHRhrHgjGls97g6t3PtPJU7MN",
    image: "https://media.npr.org/assets/img/2014/10/30/ts_photo_pr0500_0878_hirescrop-copy-97a9f606ce59a8f05c0ab40eda3ce85726c00ab2-s800-c85.webp"
    },
  {
    name: "Eminem",
    discography: "https://www.allmusic.com/artist/eminem-mn0000157676#discography",
    tours: "https://www.songkick.com/artists/182968-eminem",
    instagram: "https://www.instagram.com/eminem/",
    spotify: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR?si=uRqHklcDQZSPJ2L5fRWb0g",
    video: "https://www.youtube.com/watch?v=wIQWRHJq_kE&list=PLbYmEyGNNePghezfWVqIW8Gi7dF2-fHM3",
    image: "https://i.discogs.com/OMxoYlGYCVH5XjvvcNxFiRoTcoj4dIkM7Nzs27OLrIw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM4NjYx/LTE2NDI5Mjk5NzUt/OTQyOS5qcGVn.jpeg"
    },
  {
    name: "Tupac Shakur",
    discography: "https://www.allmusic.com/artist/2pac-mn0000921895#discography",
    tours: "RIP",
    instagram: "https://www.instagram.com/2pac/",
    spotify: "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh?si=ptwzblzoQum9paRlPs0KaA",
    video: "https://www.youtube.com/watch?v=Mb1ZvUDvLDY&list=PLkBNq2iX07mzACJ2GSaEsxIOfwmvNW1mm",
    image: "https://i.discogs.com/dpK0UOgJy7m-5wC5QpucdUe7EagDni706vEoij8ooXc/rs:fit/g:sm/q:90/h:600/w:563/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMDc1/Mi0xNjk4MjY5NTk0/LTY2MzEuanBlZw.jpeg",
  },
  {
    name: "Ben l'Oncle Soul",
    discography: "https://www.allmusic.com/artist/ben-loncle-soul-mn002459668#discography",
    tours: "https://www.songkick.com/artists/2689396-ben-loncle-soul",
    instagram: "https://www.instagram.com/benlonclesoul/",
    spotify: "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK?si=eKC_dx5tQnyOwIJL319lgw",
    video: "https://www.youtube.com/playlist?list=PLWzpoupjIfZVILb60rrfbZD_XoE24u5Mr",
    image: "https://images.sk-static.com/images/media/img/col6/20170328-141512-900427.jpg",
  },
  {
    name: "Billie Eilish",
    discography: "https://www.allmusic.com/artist/billie-eilish-mn0003475903#discography",
    tours: "https://www.songkick.com/artists/8913479-billie-eilish",
    instagram: "https://www.instagram.com/billieeilish/",
    spotify: "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH?si=rlEzIF3LSSGXZZzq94FhHw",
    video: "https://www.youtube.com/watch?v=cW8VLC9nnTo&list=PLsCPTY_MPoPbCftVtuvquFs9ayLDwD237",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNPYjhn02FrIiaFyMH-EU16VIztSvzb8I4bbps6GFimtmlqeAID08q_CuMfQcHRi8sEQLnfnPE7_uaGnQ"
  },
  { 
    name: "Bruno Mars",
    discography: "https://www.allmusic.com/artist/bruno-mars-mn0001032082#discography",
    tours: "https://www.songkick.com/artists/941964-bruno-mars",
    instagram: "https://www.instagram.com/brunomars/",
    spotify: "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C?si=i2s6dGXIRB2QtsoJpGx80Q",
    video: "https://www.youtube.com/watch?v=GG7fLOmlhYg&list=PL2gNzJCL3m_8e21QH4D-Kz5KB7iC-Dk23",
    image: "https://i.discogs.com/dKM_wATHyNXLGIjE1Y6gV0f2ifN9jnbDp9AnwdABSqY/rs:fit/g:sm/q:90/h:348/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEzNTc2/OTMtMTYyOTk4MzQy/Ny04NjQzLmpwZWc.jpeg"
  },
  {
    name: "Robin Thicke",
    discography: "https://www.allmusic.com/artist/robin-thicke-mn0000238686#discography",
    tours: "https://www.songkick.com/artists/442575-robin-thicke",
    instagram: "https://www.instagram.com/robinthicke/",
    spotify: "https://open.spotify.com/artist/0ZrpamOxcZybMHGg1AYtHP",
    video: "https://www.youtube.com/watch?v=CeKpscEfM28&list=PL25EUe_x_wpHpdKYMRcyiVwqWa8AQD7Yf",
    image: "https://i.discogs.com/CWbAUBohJb0Skfaoyi91F2wyz8HN8oUD09pSJyhv8Dc/rs:fit/g:sm/q:90/h:600/w:512/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5MjY4/MS0xMzk5MjI4Njkx/LTEwMDAuanBlZw.jpeg"
  },
  {
    name: "John Legend",
    discography: "https://www.allmusic.com/artist/john-legend-mn0000814387#discography",
    tours: "https://www.songkick.com/artists/421338-john-legend",
    instagram: "https://www.instagram.com/johnlegend/",
    spotify: "https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t?si=h4XxywBwR921LiE6o9LnRw",
    video: "https://www.youtube.com/watch?v=iXvy8ZeCs5M&list=PL3ePTPRm488EXxWdtr2aSep4MD0xRDFZB",
    image: "https://i.discogs.com/csb6hZtVbOY-tR5U6cMCiDN6bBXzrkhCCcWXfqjCIuc/rs:fit/g:sm/q:90/h:600/w:430/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE4Mjcz/OC0xNDUwMDAzNTAz/LTI5MzguanBlZw.jpeg",
  },
  {
    name: "Amy Winehouse",
    discography: "https://www.allmusic.com/artist/amy-winehouse-mn0000627026#discography",
    tours: "RIP",
    instagram: "https://www.instagram.com/amywinehouse/",
    spotify: "https://open.spotify.com/artist/6Q192DXotxtaysaqNPy5yR?si=31UwnmgmQYqVldFjL6S3NQ",
    video: "https://www.youtube.com/watch?v=TJAfLE39ZZ8&list=PLnwHF3U6z38QAC8FGxdR9KsFKUM_rlL6N",
    image: "https://i.discogs.com/d0w5v6jwPcz4dyfR-r1g2h9AxTWsjrrtV473oeh-LK4/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE1MTIy/My0xMzkxODg1MDUw/LTkxNDguanBlZw.jpeg",
  },
  {
    name: "Alicia Keys",
    discography: "https://www.allmusic.com/artist/alicia-keys-mn0000005307#discography",
    tours: "https://www.songkick.com/artists/512769-alicia-keys",
    instagram: "https://www.instagram.com/aliciakeys/?hl=en",
    spotify: "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa?si=7C1MtT4AQzyLdJIsCQceUw",
    video: "https://www.youtube.com/playlist?list=PL9_UKVdymCPcSf5oE1wXk0iAcfNAwFeaN",
    image: "https://i.discogs.com/4FQdF3R5VaOuLe9mbIF5ObA0ejCbnaMK_XxAxnTNjg8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM4OTA1/LTE2NTg3NTg2ODUt/MjgzNy5qcGVn.jpeg",
  }
]

export default artists;
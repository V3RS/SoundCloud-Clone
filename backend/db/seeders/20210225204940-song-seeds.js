"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          title: "Chosen 1",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Polo+G+-+Chosen+1+(Official+Audio)+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/chosen1pic.jpg",
          artist: "Polo G",
          album: "Die A Legend",
        },
        {
          title: "Hide",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Hide+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/hide.jpg",
          artist: "Juice WRLD",
          album: "Hide",
        },
        {
          title: "Hussle and Motivate",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Hussle+%26+Motivate+-+Nipsey+Hussle%2C+Victory+Lap+%5BOfficial+Audio%5D+(256+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/hussleandmotivate.jpg",
          artist: "Nipsey Hussle",
          album: "Hussle and Motivate",
        },
        {
          title: "American Teen",
          genre: "Pop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/American+Teen+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/americanteen.jpg",
          artist: "Khalid",
          album: "American Teen",
        },
        {
          title: "Phone",
          genre: "Punjabi Pop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Phone+__+Mickey+Singh+__+Lyrics+Video+(256+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/phone.jpg",
          artist: "Mickey Singh",
          album: "Phone",
        },
        {
          title: "Shooters",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Tory+Lanez+-+Shooters+(Audio)+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/shooters.jpg",
          artist: "Tory Lanez",
          album: "Memories Don't Die",
        },
        {
          title: "Drive Thru",
          genre: "Pop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/drive+thru+-+tam.mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/tam-img.JPG",
          artist: "Tamae",
          album: "Drive Thru",
        },
        {
          title: "Waves",
          genre: "Pop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Mr+Probz+-+Waves+(Robin+Schulz+Radio+Edit)+%5BCover+Art%5D+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/waves.jpg",
          artist: "Robin Schulz",
          album: "Waves",
        },
        {
          title: "Take A Minute",
          genre: "Pop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Take+A+Minute-+K'naan+(Lyrics)+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/takeAMinute.jpg",
          artist: "K'NAAN",
          album: "Take A Minute",
        },
        {
          title: "Blind",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/DaBaby+-+Blind+feat+Young+Thug+(Official+Audio)+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/blindPic.jpg",
          artist: "Da Baby",
          album: "Blind",
        },
        {
          title: "Family",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/Chance+The+Rapper+-+Family+(Feat.+Vic+Mensa+and+Sulaiman)+(256+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/family.jpg",
          artist: "Chance The Rapper",
          album: "10 Day",
        },
        {
          title: "Mr. Right Now",
          genre: "Hip Hop",
          audioFile:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongs/21+Savage+x+Metro+Boomin+ft+Drake+-+Mr.+Right+Now+(Official+Audio)+(320+kbps).mp3",
          imgUrl:
            "https://soundwavevs.s3.us-east-2.amazonaws.com/soundwaveSongImages/mrRightNowpic.jpg",
          artist: "21 Savage",
          album: "Savage Mode II",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Songs", null, {});
  },
};

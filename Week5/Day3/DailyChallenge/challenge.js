// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }


}

// Instantiate a new Video instance and call the watch() method.
const vid1 = new Video('about dogs', 'dude', 200);
vid1.watch();

// Instantiate a second Video instance with different values.
const vid2 = new Video('about cats', 'other dude', 300);
vid2.watch();


// array of objects??
const details = [
    {title: 'topic1', uploader: 'user1', time: 100},
    {title: 'topic2', uploader: 'user2', time: 100},
    {title: 'topic3', uploader: 'user3', time: 100},
    {title: 'topic4', uploader: 'user4', time: 100},
    {title: 'topic5', uploader: 'user5', time: 100},
]

details.map(({title, uploader, time}) => new Video(title, uploader, time));

// Caption Generator
function generateCaption() {

    let topic = document.getElementById("topic").value;

    if (topic === "") {
        alert("Please enter your video topic!");
        return;
    }

    let caption = "🔥 " + topic +
        " | Follow your dreams! ❤️ #TikTok #ForYou";

    document.getElementById("result").innerText = caption;
}


// Hashtag Generator
function generateHashtags() {

    let topic = document.getElementById("hashtag").value;

    if (topic === "") {
        alert("Please enter a category!");
        return;
    }

    let cleanTopic = topic.replace(/[^a-zA-Z0-9]/g, "");

    let hashtags = "#" + cleanTopic +
        " #TikTok #ForYou #Trending #Creator";

    document.getElementById("tags").innerText = hashtags;
}function generateIdeas() {

    let category = document.getElementById("category").value;

    let ideas = {
        Funny: [
            "Funny daily life moments 😂",
            "Expectation vs Reality",
            "Try not to laugh challenge"
        ],

        Travel: [
            "Beautiful places in your city",
            "Budget travel tips",
            "Best travel memories"
        ],

        Education: [
            "Interesting facts",
            "Learn something new",
            "Useful websites"
        ],

        Lifestyle: [
            "A day in my life",
            "My morning routine",
            "My favourite outfits"
        ]
    };

    document.getElementById("ideas").innerText =
        ideas[category].join("\n");
}function saveVideo() {

    let name = document.getElementById("videoName").value;
    let views = Number(document.getElementById("views").value);
    let likes = Number(document.getElementById("likes").value);
    let comments = Number(document.getElementById("comments").value);

    if (
        !name.trim() ||
        document.getElementById("views").value === "" ||
        document.getElementById("likes").value === "" ||
        document.getElementById("comments").value === "" ||
        !Number.isSafeInteger(views) ||
        !Number.isSafeInteger(likes) ||
        !Number.isSafeInteger(comments) ||
        views < 0 || likes < 0 ||
        comments < 0 || likes > views
    ) {
        alert("Please enter valid video details!");
        return;
    }

    let video = {
        name: name,
        views: views,
        likes: likes,
        comments: comments
    };

    let videos = JSON.parse(
        localStorage.getItem("videos") || "[]"
    );

    videos.push(video);

    localStorage.setItem(
        "videos",
        JSON.stringify(videos)
    );

    document.getElementById("trackerResult").innerText =
        "Video: " + name +
        "\nViews: " + views +
        "\nLikes: " + likes +
        "\nComments: " + comments;

    alert("Video statistics saved successfully!");
    updateDashboard();
}function updateDashboard() {

    let videos = JSON.parse(
        localStorage.getItem("videos") || "[]"
    );

    let views = 0;
    let likes = 0;
    let comments = 0;

    videos.forEach(video => {
        views += video.views;
        likes += video.likes;
        comments += video.comments;
    });

    let engagement = views > 0
        ? ((likes + comments) / views * 100).toFixed(2)
        : 0;

    document.getElementById("totalViews").innerText = views;

    document.getElementById("totalLikes").innerText = likes;

    document.getElementById("totalComments").innerText = comments;

    document.getElementById("engagement").innerText =
        engagement + "%";
}// Update dashboard when website opens
updateDashboard();
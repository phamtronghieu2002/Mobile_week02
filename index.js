const urlBacon = "https://jsonplaceholder.typicode.com/photos";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()

var url = 'https://jsonplaceholder.typicode.com/photos/1';
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);



var url = "https://reqres.in/api/users";

var data = {
    name: "Pham Trong Hieu",
    job: "Student"
};

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);




var url = "https://reqres.in/api/users";

var data = {
    name: "morpheus",
    job: "zion resident"
};

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url + "/2", true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);

DELETE
var url = 'https://reqres.in/api/users';
var xhr = new XMLHttpRequest()
xhr.open('DELETE', url + "/2", true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);


const myPromise = new Promise((resolve, reject) => { resolve(0) })

myPromise
    .then(
        function() {
            return new Promise(function(resolve) {
                setTimeout(resolve, 3000);
            });
        }
    )
    .then(
        function(data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function(data) {
            console.log(data);
        }
    )


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(
        (data) => {
            var htmls = data.map(
                function(posts) {
                    return `<li> 
                                <h2>${posts.id}</h2>
                                <h2>${posts.title}</h2>
                                </li>`
                }
            );
            var html = htmls.join();
            document.getElementById('info').innerHTML = html;
        }
    )
    .catch(() => console.log('Có lỗi!'))



fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name: "Pham Trong Hieu",
            job: "Student"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        body: JSON.stringify({
            name: "PHAM TRONG HIEU2002",
            job: "HOC SINH"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));


axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/1',

    })
    .then(function(response) {
        console.log(response);
    });

function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
            callback(xmlHttp);
    };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
}

httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log('1', data);
    document.getElementById('img_1').setAttribute('src', data.responseURL);

    httpGetAsync('https://picsum.photos/200/300', (data) => {
        console.log('2', data);
        document.getElementById('img_2').setAttribute("src", data.responseURL);

        httpGetAsync('https://picsum.photos/200/300', (data) => {
            console.log('3', data);
            document.getElementById('img_3').setAttribute("src", data.responseURL);
        });
    });
});
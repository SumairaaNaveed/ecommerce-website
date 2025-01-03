export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Calzon Pizza",
            price: 10,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAD4QAAEDAwIFAgQCCQIFBQAAAAECAwQABRESIQYTMUFRImEUcYGRMqEHFSNCUrHB0fBi4SQzcpLxFjRDRIL/xAAaAQACAwEBAAAAAAAAAAAAAAACBAEDBQAG/8QAKhEAAgIBBAEEAQQDAQAAAAAAAQIAAxEEEiExQRMiUWEyBRRxgUKRoSP/2gAMAwEAAhEDEQA/AOICpUAkjAJNEnrRpY5zLoKCcAHzUdrQoTkANhxSTnQTjVjtVYsVhkS70WDAETYW99LaXFhSdW6QR1qFYKDhexFGoj7zsxptlvSAv0pUdWlRJz9N6F3RotSHUddKyKBbG3cy80IybgJGg5qwgbULS6UqwTRKMrUkGmgczPYYk6RW+K8FSAZqyBNQM9KkjRnpbwZjNKdcO+lIzt5Pge9MHCnD7V3578qQEMR8amgoBTij0G/Qe9XLxeRwzLctrNnbS04k+rOSv/VnuBSl2q2PsQZaNU6UuN7HAg1nhWYuMuQ/Ijx2EHClHKyD0wAB1qzE4atbkVyVIvCwy1gEIbCVKPfrnA6UwTLubhZSqEWiNI5qHSQlGBqGD9RQ2HHnz465LkRtpbZwoPJ2wACdh2wofWs791e/1NZP0+lRkjM9PDnDaytlp+4c9pBdcSpO6kgZwntkjOKFXe1WNuwSLhCMsOpzykqWFBQ267bHf+Vezr0v45gxYzbSVMFT4V6UHBJJzjpgDes49DP6niPwo4aQ42Cop/hVggGrVNwYZaA9WnCsFHIim0vmIBG9e4razwZUthXwsd14o3VoTnAqZ+DMZWtDkV8KQMqToJKR74rT3rnBPMxtjd4lWtSK9SoK6dqw7jIqYPUJ8O5TMccRgrS0oaDjC0kYI3+lBfVrVzE6V5wpJ2KT4xR7hhWm5BWoNoCFc1xQyEJIOSfI9qG3UTGpgTPcC3QnCVBWolGdt+p2xgnfFB/lOBlMir9utxknmObR09cdVe1U0DUtKc4yQM+KbXkx0WyK0z+MLwcfLv8A53oLG2iWIuTKL7iQnSgBKRsEjoBRfg0xrg1c7DNVy0z2stLPZwdP89qBvf8ANKR0FaJOFpW0spWk5BB3z7Umlm1smXlMjE6jw5xe3EhfqviNXInwMMqKzs6BsFg98gV7SQu+fGIR+uLc1PdbGlLqjpVjwfNeU4NQso9IwFb4zjbTiXvTkZQlR60PDUhdwCITS3XhvpbTkj3olb1SuIprcKI0S65gKWRgNp7mum3GJF4WjNOWphtC0j1pCRlzbue5qitGyWYR17UVQqGc0",

        },
        {
            id: 2,
            name: "Fajita pizza",
            price: 40,
            image:  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFRUXFxobGBgXFxgYGhgZFx0aFxobIBoaHyggGBolGxgXIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy8mICYvLS4yKy8tLy0tLTAtLS8tLS0tLS0tMC0rLy0tLS0tKy0tLS0tLS0tLS0tLS0vLjUtLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD4QAAEDAgQDBQcDAwIFBQAAAAECAxEAIQQSMUEFUWEGEyJxgTJCkaHB0fAjUrEUcuFi8YKSorLSBxUzQ+L/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAMhEAAQQBAwIEBQMEAwEAAAAAAQACAxEhBBIxQVEiYXHwEzKBkaGx0eEjQsHxBRQzJP/aAAwDAQACEQMRAD8A9gy9fz410zXaU1FFEozpSaQlOg9b/WpZrluVRRPTSmmZhyrpc6VFE4mqmK4ilByyCv8AbOk6Tyqvj+Ix4UDxbmLDp5/xQ97CocHiF/3CxoL5OjURrepUWOdWTLviFyCkQEjlH1qLNAkHMn4/CkXFtmFSpPP8+tL+nHtMqjmkjwn02oCIkH7WlQ3TuPLnTEaS2ZG",

        },
        {
            id: 3,
            name: "Tikka pizza",
            price: 80,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBsbGRgYGR0fIBsfHhgfGh4aHSAgICggHRslHh0aIjEhJSorLi4uGx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUvLS0vMi0tLS0tLTAtLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPkAywMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgIDBAcBAP/EAEEQAAEDAgQEBAQEBQMDAwUBAAECAxEAIQQFEjEGQVFhEyJxgTKRobFCwdHwFCNS4fEHYnIVJDM0grIXQ5LC4hb/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMxEAAgIBBAE",
        },
        {
            id: 4,
            name: "Italian pizza",
            price: 60,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTExMVFRUVGBYXGBgXGBYXFxcXFRcYGBcXFRcYHSggGholHhgXITEiJSotLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy8lICYtLS0rLy0tLy83LS4vLS0tLS8tLS0tLS0tLS0tLS0rLS0rLS0tLS0tLy0tLS0tLS0tLf/AABEIARIAuAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAA",
        },
        {
            id: 5,
            name: "chicken tikka pizza",
            price : 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIp0ltffrUmY_VgbnhRpQ3R4_bS0QcCLUXqg&s",
        },
        {
            id: 5,
            name: " Fajita chicken pizza",
            price: 150,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6gfptcKmFeQ6Y-v7dQWMrXaU46WGlVPubQ&s",
        },
        {
            id: 6,
            name: "BBQ pizza",
            price: 78,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMRYOW9Fl2xYFnJsLajNyki0E0C1nWhq9iA&s",
        },
    ];

    res.status(200).json(products);
}
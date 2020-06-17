export const API_KEY = 'B63X_ogtemIYt_3aoCJJsj7IlovCE2UKoCv74idU';
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const path = `https://www.rescuetime.com/anapi/data?key=${API_KEY}&format=json`;    
// // const fetchData = 
//     fetch(PROXY_URL + path)
//     .then(res => res.json())
//     .then(contents => console.log(contents))

export const getDaylyData = (fn) => {
    let base = `https://www.rescuetime.com/anapi/data?key=${API_KEY}&date&total_hours&format=json`;
    const fetchData = 
        fetch(PROXY_URL + base, {mode: 'no-cors'})
        .then(res => res.json())
        .then(contents => {
            fn(contents);
        });
}

export const getCategoriesByHour = (fn) => {
    let base = `https://www.rescuetime.com/anapi/data?key=${API_KEY}&perspective=interval&restrict_kind=overview&restrict_begin=2020-06-11&restrict_end=2020-06-11&restrict_kind=productivity&format=json`;
    const fetchData = 
    fetch(PROXY_URL + base, {
        mode: 'no-cors'
    })
    .then(res => {
        return res.json();
    })
    .then(contents => {
        fn(contents);
    });
}


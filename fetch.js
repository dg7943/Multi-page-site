

    
       document.getElementById('fetchData').onclick = function() {
        let url = 'https://jsonplaceholder.typicode.com/todos';

        document.getElementById('dataContainer').innerHTML = '<p>Loading...</p>';

        fetch(url)
            .then(response => response.json()) 
            .then(data => {
                let html = '<ul>';
                for (let i = 0; i < 10; i++) {
                    let checked = data[i].completed ? 'checked' : '';
                    html += `<li>
                                <input type="checkbox" ${checked} disabled>
                                ${data[i].title}
                             </li>`;
                }
                html += '</ul>';
                document.getElementById('dataContainer').innerHTML = html;
            })
            .catch(() => {
                document.getElementById('dataContainer').innerHTML = '<p style="color:red;">Error loading data.</p>';
            });
    };
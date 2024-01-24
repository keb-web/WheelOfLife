let pie_count = 1;

function createPie() {
    let pie = document.createElement('div');

    pie.className = 'pie';
    pie.textContent = pie_count;
    pie_count = pie_count + 1;

    let pieContainer = document.getElementById('pie_container');
    pieContainer.appendChild(pie);
}


const managerCard = (data) => {
    `<!-- <div class="card employee-card marginRight">
    <div class="card-header blueTheme">
      <h2 class="card-title">{{ name }}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: {{ id }}</li>
        <li class="list-group-item">
          Email: <a href="mailto:{{ email }}">{{ email }}</a>
        </li>
        <li class="list-group-item">Office number: {{ officeNumber }}</li>
      </ul>
    </div>
    </div> -->`
}

const engineerCard = (data) => {
    `<!-- <div class="card employee-card marginRight">
    <div class="card-header blueTheme">
      <h2 class="card-title">{{ name }}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: {{ id }}</li>
        <li class="list-group-item">
          Email: <a href="mailto:{{ email }}">{{ email }}</a>
        </li>
        <li class="list-group-item">github: <a href="mailto:{{ github }}">{{ github }}</a></li>
      </ul>
    </div>
    </div> -->`
}

const internCard = (data) => {
    `<!-- <div class="card employee-card marginRight">
    <div class="card-header blueTheme">
      <h2 class="card-title">{{ name }}</h2>
      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: {{ id }}</li>
        <li class="list-group-item">
          Email: <a href="mailto:{{ email }}">{{ email }}</a>
        </li>
        <li class="list-group-item">School: {{ School }}</li>
      </ul>
    </div>
    </div> -->`
}

module.exports
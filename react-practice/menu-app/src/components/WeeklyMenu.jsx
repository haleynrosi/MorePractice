import 'bootstrap/dist/css/bootstrap.css';


function WeeklyMenu(props){
    return(
        <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" value = {props.dailymenu.menu} aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
      </div>
    )
}

export default WeeklyMenu;
function Minor(props){
    return(
        <div class="row text-center">
                    <div class="col-md-6 lightgraycols">
                        <h2>{props.value1}</h2>
                    </div>

                    <div class="col-md-3 lightgraycols">
                        <h2>{props.value2}</h2>
                    </div>

                    <div class="col-md-3 orangecols">
                        <h2>{props.value3}</h2>
                    </div>
                </div>
    )
}

export default Minor;
interface barProps {
    value: number;
    width: number;
}

export function Bar({value, width}: barProps){
    return(
        <div className="mt-1 d-flex">
            <div style={{backgroundColor: '#c2dfe3', float: 'left', height: '15px', flex: value / 100 * width}}></div>
            <div style={{backgroundColor: '#9db4c0', float: 'left', height: '15px', flex: (1 - (value / 100)) * width}}></div>
        </div>
    )
}
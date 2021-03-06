import { makeStyles } from '@material-ui/core/styles';
// import { useStyles } from './../CollectionPart/IndexStyle';

export const useStyles = makeStyles((theme) =>({
        
    Cards_Main:{
        width: "100%",
        height : "auto",
        textAlign: "center",
        gap: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "100px",
        boxSizing: "border-box",
    },


    card:{
        width: "370px",
        height: "510px",
        // border: "3px solid black",
        background: "rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        margin: "50px 0px",
        borderRadius: "10px",
        marginBottom: "-50px",
        paddingTop: "30px",
        [theme.breakpoints.down('xs')]:{
            width: "80%",
            height: "490px",
            "& img":{
                width: "85% !important",
                height: "300px !important",
            },
        
        },
        "& Button":{
            background: "linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)",
            width: "75%",
            color: "white",
            fontWeight: "bold",
            marginTop: "25px",
        },
    },
    cardText:{
        display: "flex",
        justifyContent: "space-around",
        // width: "200px",
        "& div":{
            // display: "flex",
        },
    },
    cardhead:{
        fontSize: "15px",
            paddingTop: "10px",
            color: "rgba(255, 255, 255, 0.5)",
        "& span":{
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
        },
    },

}))

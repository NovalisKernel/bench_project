import React from "react";
import ReactPaginate from "react-paginate";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const styles = theme => ({
    pagination_wrapper: {
        margin: "60px auto 10px",
    },
    pagination_ul: {
        listStyle: "none",
        display: "flex",        
        padding: "10px 30px",
        alignItems: "center",
        justifyContent: "center",
    },
    pagination_arrow: {        
        lineHeight: "1.5",        
    },
    pagination_arrow_link: {
        padding: "8px 10px",
        color: "#3f51b5",
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
        opacity: "0.8",
        "&:hover": {
            opacity: "1",
        },
    },
    pagination_break: {
        cursor: "pointer",
        lineHeight: "1.5",
    },
    pagination_break_link: {
        display: "flex", 
        alignItems:  "center",
        justifyContent: "center",
        padding: "8px 10px",
        color: "#3f51b5",
        opacity: "0.8",
        "&:hover": {
            opacity: "1",
        },
    },
    paginate_li: {        
        lineHeight: "1.5",        
    },    
    paginate_li_a: {
        cursor: "pointer",
        display: "block",
        color: "#3f51b5",
        outline: "none",      
        fontWeight: "500",
        fontFamily: "Roboto, Helvetica, Arial",
        fontSize: "14px",      
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "4px",
        "&:hover": {
            background: "#efefef"
        },  
    },
    paginate_a_active: {
        borderColor: "#cfcfcf",  
    },
    paginate_li_active: {
             
    },
});

function Pagination({ pages, handlePageClick, classes, page }) {
    return (
        <div className={classes.pagination_wrapper}>
            <ReactPaginate
                pageCount={pages}
                previousLabel={<ArrowBackIosIcon fontSize={"small"} />}
                nextLabel={<ArrowForwardIosIcon fontSize={"small"} />}
                breakLabel={<MoreHorizIcon fontSize={"small"} />}
                breakClassName={classes.pagination_break}
                breakLinkClassName={classes.pagination_break_link}
                marginPagesDisplayed={3}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={classes.pagination_ul}
                pageClassName={classes.paginate_li}
                previousClassName={classes.paginate_arrow}
                previousLinkClassName={classes.pagination_arrow_link}                
                nextClassName={classes.paginate_arrow}
                nextLinkClassName={classes.pagination_arrow_link}
                pageLinkClassName={classes.paginate_li_a}
                activeClassName={classes.paginate_li_active}
                activeLinkClassName={classes.paginate_a_active}
                forcePage={page}
            />
        </div>
    );
}

export default withStyles(styles)(Pagination);
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
    },
    paginate_li: {
        cursor: "pointer",
        lineHeight: "1.5",
        padding: "8px 15px",
        border: "1px solid transparent",
    },    
    paginate_li_a: {
        display: "block",
        color: "#3f51b5",
        outline: "none",      
        fontWeight: "500",
        fontFamily: "Roboto, Helvetica, Arial",
        fontSize: "14px",        
    },
    paginate_li_active: {
        borderColor: "#cfcfcf",
        borderRadius: "4px",
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
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={classes.pagination_ul}
                pageClassName={classes.paginate_li}
                previousClassName={classes.paginate_arrow}
                previousLinkClassName={classes.pagination_arrow_link}                
                nextClassName={classes.paginate_arrow}
                nextLinkClassName={classes.pagination_arrow_link}
                pageLinkClassName={classes.paginate_li_a}
                activeClassName={classes.paginate_li_active}
                //initialPage={page}
                forcePage={page}
            />
        </div>
    );
}

export default withStyles(styles)(Pagination);
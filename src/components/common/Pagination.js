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
    paginate_li: {
        lineHeight: "1.5",
    },
    paginate_li_a: {
        padding: "3px 9px",
        display: "block",
        color: "#3f51b5",
        outline: "none",
        marginLeft: "-1px",
        border: "1px solid #dee2e6",
        lineHeight: "1.25",
    },
    paginate_a_active: {
        backgroundColor: "#3f51b5",
        borderColor: "#3f51b5",
        color: "#ffffff",
        outline: "none"
    },
    pageLinkClassName: {
        textDecoration: "none",
        color: "blue",
        float: "left",
        padding: ["10px", "15px"]
    },
    formControl: {
        width: "180px"
    },
    filters: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%"
    }
});

function Pagination({ pages, handlePageClick, classes, page }) {
    return (
        <div className={classes.pagination_wrapper}>
            <ReactPaginate
                pageCount={pages}
                previousLabel={<ArrowBackIosIcon fontSize={"small"} />}
                nextLabel={<ArrowForwardIosIcon fontSize={"small"} />}
                breakLabel={<MoreHorizIcon fontSize={"small"} />}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={classes.pagination_ul}
                pageClassName={classes.paginate_li}
                previousClassName={classes.paginate_li}
                nextClassName={classes.paginate_li}
                pageLinkClassName={classes.paginate_li_a}
                activeLinkClassName={classes.paginate_a_active}
                //initialPage={page}
                forcePage={page}
            />
        </div>

    );
}

export default withStyles(styles)(Pagination);
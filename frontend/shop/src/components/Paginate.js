import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';
 
 
const useQuery = () => {
 return new URLSearchParams(useLocation().search);
}
 
function Paginate({page, pages, maxPageDisplay=5, isAdmin=false}) {
 
    let keyword = useQuery().get("keyword")
 
    let url = !isAdmin ? '/' : '/admin/productlist/'
    url += keyword ? `?keyword=${keyword}&` : '?'
 
 
    return (pages > 1 && (
        <Pagination>
 
            {/* First */}
            {pages !== 1 && page !== 1 ? (
               
                <Pagination.First> <Link to={`${url}page=1`}>First</Link></Pagination.First>
                
            ) : (
                <Pagination.First disabled>First</Pagination.First>
            )}
 
 
            {/* Prev */}
            {page > 1 ? (
                <Pagination.Prev><Link to={`${url}page=${page-1}`}>&laquo;</Link></Pagination.Prev>
            ) : (
                <Pagination.Prev disabled>&laquo;</Pagination.Prev>
            )}
            
            
            {/* Pages
               <React.Fragment>: https://www.designcise.com/web/tutorial/how-to-add-a-key-to-an-empty-tag-in-react
            */}
            {[...Array(pages).keys()].map((x) => (page === x+1 ? (

                        <Link key={x+1}  to={`${url}page=${x+1}`}>
                            <Pagination.Item active>{x+1}</Pagination.Item>
                        </Link>

                    ) : x+1 > page && x+1 <= page + maxPageDisplay ? (

                        <React.Fragment key={x+1}>

                            <Pagination.Item>
                                <Link to={`${url}page=${x+1}`}>{x+1}</Link>
                            </Pagination.Item>

                            {x+1 === page + maxPageDisplay && x+1 < pages && (

                                <Pagination.Ellipsis href={`${url}page=${page+(maxPageDisplay+1)}`} />

                            )}            
                        </React.Fragment>

                    ) : x+1 < page && x+1 >= page - maxPageDisplay && (

                        <React.Fragment key={x+1} >
                            {x+1 === page - maxPageDisplay && x+1 > 1 && (

                                <Pagination.Ellipsis href={`${url}page=${page-(maxPageDisplay+1)}`} />

                            )}

                            <Pagination.Item>
                                <Link key={x+1} active to={`${url}page=${x+1}`}>{x+1}</Link>
                            </Pagination.Item>

                        </React.Fragment>  

                    )
                ))
            }
 
 
            {/* Next */}
            {page < pages ? (

                <Pagination.Next>
                    <Link to={`${url}page=${page+1}`}>&raquo;</Link>
                </Pagination.Next>

            ) : (

                <Pagination.Next disabled>&raquo;</Pagination.Next>

            )}
 
 
            {/* Last */}
            {pages !== page ? (

                <Pagination.Last><Link to={`${url}page=${pages}`}>Last</Link>
                </Pagination.Last>

            ) : (

                <Pagination.Last disabled>Last</Pagination.Last>

            )}
 
        </Pagination>
    ))
}
 
export default Paginate
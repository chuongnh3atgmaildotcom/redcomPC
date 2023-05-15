import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './pagination.module.css'

// Create URL path for numeric pagination
const getPageNumberPath = (currentIndex) => {
    if (currentIndex === 0) {
        return '/blog/'
    }
    return '/blog/' + (currentIndex + 1)
}

const Pagination = ({ pageInfo }) => {
    if (!pageInfo) return null
    const { currentPage, pageCount } = pageInfo

    // Create URL path for previous and next buttons
    const prevPagePath = currentPage - 1 === 1 ? '/blog/' : '/blog/' + (currentPage - 1).toString()
    const nextPagePath = '/blog/' + (currentPage + 1).toString()

    // Check if page is first or last to disable previous and next buttons
    const disablePrev = currentPage === 1
    const disableNext = currentPage === pageCount

    return (
        <div className={styles.root}>
            <Link className={`prev`} to={disablePrev ? '/blog/' : prevPagePath} rel="prev" role="link" aria-disabled={disablePrev} style={{pointerEvents: disablePrev ? 'none' : '' }}>
                {'<'}
            </Link>
            {/*  Render numeric pagination  */}
            {Array.from({ length: pageCount }, (_, i) => {
                let numClass = 'pageNumber'
                let isCurrent = false
                if (currentPage === i + 1) {
                    isCurrent = true
                    numClass = 'currentPage'
                }
                return (
                    <Link to={isCurrent ? '/blog/' : getPageNumberPath(i)} className={numClass} key={i + 1} role="link" aria-disabled={isCurrent} style={{pointerEvents: isCurrent ? 'none' : '' }}>
                        {i + 1}
                    </Link>
                )
            })}
            <Link className={`next`} to={disableNext ? '/blog/' : nextPagePath} rel="next" role="link" aria-disabled={disableNext}  style={{pointerEvents: disableNext ? 'none' : '' }}>
                {'>'}
            </Link>
        </div>
    )
}

export default Pagination
// TODO: Make one file -> Edit... + CreateNew

import {
    FaBarcode,
    FaRegGrinStars,
    FaUserAlt,
    FaUserFriends,
} from 'react-icons/fa';
import {
    MdAttachMoney,
    MdCorporateFare,
    MdLibraryBooks,
    MdOutlineTextSnippet,
    MdTitle,
} from 'react-icons/md';

import { BsCalendarDate } from 'react-icons/bs';
import { CgImage } from 'react-icons/cg';
import { GiFountainPen } from 'react-icons/gi';
import styled from 'styled-components';

const EditSingleBook = ({ book, onClose, onBookEdit }) => {
    return (
        <Wrapper>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}></div>
                <div className="modal">
                    <div className="book-container">
                        <header className="headers">
                            <h2>Edit Book</h2>
                            <button className="btn close" onClick={onClose}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="xmark"
                                    className="svg-inline--fa fa-xmark"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                                    ></path>
                                </svg>
                            </button>
                        </header>

                        <form onSubmit={(e) => onBookEdit(e, book.isbn)}>
                            <div className="form-group long-line">
                                <label htmlFor="title">Title</label>
                                <div className="input-wrapper">
                                    <span>
                                        <MdTitle />
                                    </span>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        defaultValue={book.title}
                                    />
                                </div>
                            </div>

                            <div className="form-group long-line">
                                <label htmlFor="authors">
                                    Authors (Comma separated eg. J. K. Rowling,
                                    George R. R. Martin)
                                </label>
                                <div className="input-wrapper">
                                    <span>
                                        {book.authors.length > 1 ? (
                                            <FaUserFriends />
                                        ) : (
                                            <FaUserAlt />
                                        )}
                                    </span>
                                    <input
                                        id="authors"
                                        name="authors"
                                        type="text"
                                        defaultValue={book.authors.join(', ')}
                                    />
                                </div>
                            </div>

                            <div className="form-group long-line">
                                <label htmlFor="imageUrl">Image Url</label>
                                <div className="input-wrapper">
                                    <span>
                                        <CgImage />
                                    </span>
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        defaultValue={book.imageUrl}
                                    />
                                </div>
                            </div>

                            <div className="form-group long-line">
                                <label htmlFor="description">Description</label>
                                <div className="input-wrapper">
                                    <span>
                                        <MdOutlineTextSnippet />
                                    </span>
                                    <textarea
                                        id="description"
                                        name="description"
                                        // type="text"
                                        rows="7"
                                        cols="33"
                                        defaultValue={book.description}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <FaBarcode />
                                        </span>
                                        <input
                                            id="isbn"
                                            name="isbn"
                                            type="text"
                                            defaultValue={book.isbn}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pageCount">Pages</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <MdLibraryBooks />
                                        </span>
                                        <input
                                            id="pageCount"
                                            name="pageCount"
                                            type="text"
                                            defaultValue={book.pageCount}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <MdAttachMoney />
                                        </span>
                                        <input
                                            id="price"
                                            name="price"
                                            type="text"
                                            defaultValue={book.price}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="publisher">Publisher</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <MdCorporateFare />
                                        </span>
                                        <input
                                            id="publisher"
                                            name="publisher"
                                            type="text"
                                            defaultValue={book.publisher}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="publishedDate">
                                        Date Published
                                    </label>
                                    <div className="input-wrapper">
                                        <span>
                                            <BsCalendarDate />
                                        </span>
                                        <input
                                            id="publishedDate"
                                            name="publishedDate"
                                            type="text"
                                            defaultValue={book.publishedDate}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="reviews">Reviews</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <GiFountainPen />
                                        </span>
                                        <input
                                            id="reviews"
                                            name="reviews"
                                            type="text"
                                            defaultValue={book.reviews}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="stars">Stars</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <FaRegGrinStars />
                                        </span>
                                        <input
                                            id="stars"
                                            name="stars"
                                            type="text"
                                            defaultValue={book.stars}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div id="form-actions">
                                <button
                                    id="action-save"
                                    className="btn"
                                    type="submit"
                                >
                                    Save
                                </button>
                                <button
                                    id="action-cancel"
                                    className="btn"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* Global css */
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *,
    ::after,
    ::before {
        box-sizing: border-box;
        outline: none;
    }

    .btn {
        background: #2a87a5;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font: inherit;
        font-weight: bold;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }

    .backdrop {
        background-color: rgba(0, 0, 0, 0.75);
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 20;
    }

    .modal {
        width: 45rem;
        position: absolute;
        max-height: 90vh;
        margin: auto;
        border-radius: 20px;
        background-color: white;
        padding: 1rem;
        box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
        z-index: 30;
        margin-top: 50px;
    }

    @media (min-width: 930px) {
        .modal {
            width: 45rem;
            left: calc(50% - 20rem);
            border-radius: 14px;
        }
    }

    /* Search Bar  */
    .search-form {
        display: flex;
        justify-content: space-between;
        height: 4rem;
        background-color: #24292f;
        color: white;
        padding: 10px 20px;
    }

    /* Action buttons  */

    .btn:disabled,
    .btn.save:disabled {
        cursor: not-allowed;
        background: rgba(0, 0, 0, 0.5);
    }

    .btn:disabled svg,
    .btn.save:disabled svg {
        color: #ccc;
    }

    .btn:hover {
        opacity: 0.9;
        box-shadow: 1px 2px 8px black;
    }

    .btn svg {
        color: inherit;
        font-size: 1.25rem;
    }

    .btn.save {
        background-color: rgb(81, 194, 123);
    }

    .btn.cancel {
        background-color: rgb(231, 108, 108);
    }

    .btn.close {
        background-color: transparent;
        padding: 5px 10px;
        height: auto;
    }

    .btn.close svg {
        color: black;
    }

    .before {
        margin-right: 10px;
    }
    .after {
        margin-left: 10px;
    }

    .btn {
        padding: 5px;
        color: white;
        opacity: 0.7;
        width: 30px;
        height: 30px;
    }
    .btn svg {
        margin: 0;
    }

    .btn:hover {
        opacity: 1;
    }

    .delete-btn {
        background-color: #d9534f;
    }

    .edit-btn {
        background-color: #5cb85c;
    }

    /* Add/Edit form styles  */
    .book-container {
        width: 100%;
        height: 100%;
    }

    .headers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 5px 0px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
    }

    .header h2 {
        margin-bottom: 0px;
    }

    .input-wrapper {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .input-wrapper span {
        display: flex;
        align-items: center;
        padding: 6px 12px;
        font-weight: 400;
        line-height: 1;
        color: #555;
        text-align: center;
        background-color: #f7f7f7;
        border: 1px solid #d5dee6;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        font-size: 25px;
    }

    .input-wrapper span i {
        width: 28px;
        height: 1 em;
        min-width: 28px;
        display: inline-block;
        font-size: 1.2em;
        color: #000000;
        vertical-align: -0.125em;
    }

    .input-wrapper input,
    textarea {
        width: 100%;
        font-weight: 400;
        font-size: 1.1rem;
        line-height: 1.5;
        border: 1px solid #d5dee6;
        border-left: none;
        outline: none;
        height: 50px;
        padding: 6px 12px;
        background-color: #f7f7f7;
        border-top-right-radius: 1.25rem;
        border-bottom-right-radius: 1.25rem;
    }

    .input-wrapper textarea {
        height: 150px;
    }

    .form-row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
    }

    .form-group {
        margin-right: 10px;
        width: 47%;
    }

    .form-group .form-error {
        color: #d9534f;
        min-height: 20px;
    }

    .long-line {
        width: 98%;
        margin-top: 15px;
    }

    #form-actions {
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
    }

    #action-save {
        width: 5em;
        height: 3em;
        margin-right: 20px;
        background-color: rgb(81, 194, 123);
    }

    #action-cancel {
        width: 5em;
        height: 3em;
        margin-right: 20px;
        background-color: rgb(231, 108, 108);
    }
`;

export default EditSingleBook;

import styled from 'styled-components';

const EditSingleBook = ({ book, onClose, onBookCreate }) => {
    console.log(book._id);
    return (
        <Wrapper>
            <div className="overlay">
                <div className="backdrop" onClick={onClose}></div>
                <div className="modal">
                    <div className="user-container">
                        <header className="headers">
                            <h2>Add User</h2>
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

                        <form onSubmit={(e) => onBookCreate(e, book._id)}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">
                                        First name
                                    </label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-user"></i>
                                        </span>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            defaultValue={book.title}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last name</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-user"></i>
                                        </span>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">
                                        Phone number
                                    </label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group long-line">
                                <label htmlFor="imageUrl">Image Url</label>
                                <div className="input-wrapper">
                                    <span>
                                        <i className="fa-solid fa-image"></i>
                                    </span>
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-map"></i>
                                        </span>
                                        <input
                                            id="country"
                                            name="country"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-city"></i>
                                        </span>
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="street">Street</label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-map"></i>
                                        </span>
                                        <input
                                            id="street"
                                            name="street"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="streetNumber">
                                        Street number
                                    </label>
                                    <div className="input-wrapper">
                                        <span>
                                            <i className="fa-solid fa-house-chimney"></i>
                                        </span>
                                        <input
                                            id="streetNumber"
                                            name="streetNumber"
                                            type="text"
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
    .user-container {
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

    .input-wrapper input {
        width: 100%;
        font-weight: 400;
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
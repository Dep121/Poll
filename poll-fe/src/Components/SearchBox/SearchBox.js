import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import s from './SearchBox.module.scss';

function SearchBox({ list, onSelect }) {
    const [searchText, setSearchText] = useState('');
    const [searchList, setSearchList] = useState([]);

    const onInputChange = (e) => {
        const { target: { value } } = e;
        setSearchText(value);
        if (value === '') setSearchList([]);
        else setSearchList(list.filter(item => item.toLowerCase().indexOf(value) > -1));
    }

    return (
        <div className={s.searchContainer}>
            <div className={s.searchBox}>
                <input type={'text'} value={searchText} onChange={onInputChange} />
                {
                    searchList.length !== 0 && <div className={s.searchDropdown}>
                        {
                            searchList.map((item, i) => <div key={`${item}_${i}`} className={s.searchItem}>{item}</div>)
                        }
                    </div>
                }
            </div>
            <SearchIcon />
        </div>
    );
}

SearchBox.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func.isRequired
}

SearchBox.defaultProps = {
    list: ['deepak kumar pandey', 'Rajesh pandey', 'Guarav Singh', 'Vishal'],
}

export default SearchBox;
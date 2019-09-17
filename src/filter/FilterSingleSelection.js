import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

import FilterCustom from './FilterCustom'
import SearchBar from "../SearchBar";

const fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"]
};

export default function FilterSingleSelection(props) {
    
    const [loading, setLoading] = useState(true);
    const [title] = useState(props.title);
    const [selection, setSelection] = useState(props.prevSelection);
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [items, setItems] = useState(props.items);

    useEffect(() => {
        if(selection){
            optionSelected(selection);
        }
        setLoading(false);
	}, []);

    const optionSelected = (item) => {
        if(loading || item !== selection){
            setItems(prevItems => {
                return prevItems.map((prevItem, idx) => {
                    if (prevItem.id === item.id) {
                        const newItem = {
                            ...prevItems[idx],
                            selected: true
                        };
                        setSelection(newItem);
                        setFiltered(true);
                        props.selectionChange(newItem);
                        return newItem;
                    } else {
                        return {
                            ...prevItems[idx],
                            selected: false
                        };
                    }
                });
            });
        }
    };

    const renderMenu = () => {
        const fuse = new Fuse(items, fuseOptions);
        const data = query ? fuse.search(query) : items;
        return (
            <div className="items-filter">
                <SearchBar
                    style={{height: 36, width: 180}}
                    styleinput={{height: 36}}
                    placeholder={"Filtrar"}
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="options">
                    <ul>
                        {data.map(item => {
                            return (
                                <li key={`${item.name}-${item.id}`}>
                                    <label htmlFor={item.id}>
                                        <input
                                            id={item.id}
                                            type="checkbox"
                                            className="native-hidden"
                                            onChange={() => optionSelected(item)}
                                        />
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="none" fillRule="evenodd">
                                                <path d="M0 0h24v24H0z" />
                                                {item.selected ? (
                                                    <React.Fragment>
                                                        <rect
                                                            width="22"
                                                            height="22"
                                                            x="1"
                                                            y="1"
                                                            fill="#05AFB4"
                                                            rx="2"
                                                        />
                                                        <path
                                                            fill="#FFF"
                                                            d="M9.615 14.279L7.742 12.36a1.002 1.002 0 0 0-1.443 0 1.06 1.06 0 0 0 0 1.477l2.594 2.656a1.002 1.002 0 0 0 1.443 0l6.165-6.311a1.06 1.06 0 0 0 0-1.477 1.002 1.002 0 0 0-1.443 0L9.615 14.28z"
                                                        />
                                                    </React.Fragment>
                                                ) : (
                                                    <rect
                                                        width="21"
                                                        height="21"
                                                        x="1.5"
                                                        y="1.5"
                                                        stroke="#444444"
                                                        rx="2"
                                                    />
                                                )}
                                            </g>
                                        </svg>
                                        <span>{item.name}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <FilterCustom
            style={props.style}
            type={props.type}
            title={title}
            filtered={filtered}
            menu={renderMenu()}
        />
    );
}

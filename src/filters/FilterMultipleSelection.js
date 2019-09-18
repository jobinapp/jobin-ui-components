import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

import FilterCustom from "./FilterCustom";
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

export default function FilterMultipleSelection(props) {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(props.title);
    const [selectionArray, setSelectionArray] = useState(
        props.prevSelection ? props.prevSelection : []
    );
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.items && props.items.length > 0 ? props.items : []);

        if (props.prevSelection && props.prevSelection.length > 0) {
            for (let i = 0; i < props.prevSelection.length; i++) {
                optionSelected(props.prevSelection[i]);
            }
        }

        setLoading(false);
    }, [props.items]);

    const optionSelected = item => {
        if (item.id === "all") {
            setTitle(props.title + " - Todas");
            setFiltered(true);
            setItems(prevItems => {
                const tempArray = [];
                const all = prevItems.map((item, idx) => {
                    let allTemp = {
                        ...item,
                        selected: true
                    };
                    if (idx === 0) {
                        allTemp.id = "none";
                        allTemp.name = "Ninguna";
                    } else {
                        tempArray.push(allTemp);
                    }
                    return allTemp;
                });
                if (!loading) {
                    setSelectionArray(tempArray);
                    props.selectionChange(tempArray);
                }
                return all;
            });
        } else if (item.id === "none") {
            setTitle(props.title);
            setFiltered(false);
            setSelectionArray([]);
            props.selectionChange([]);
            setItems(prevItems => {
                return prevItems.map((item, idx) => {
                    let noneTemp = {
                        ...item,
                        selected: false
                    };
                    if (idx === 0) {
                        noneTemp.id = "all";
                        noneTemp.name = "Todas";
                    }
                    return noneTemp;
                });
            });
        } else {
            if (
                loading &&
                props.prevSelection &&
                props.prevSelection.length > 0
            ) {
                setTitle(props.title + " - " + props.prevSelection.length);
                setFiltered(true);
            }
            setItems(prevItems => {
                return prevItems.map((prevItem, idx) => {
                    if (prevItem.id === item.id) {
                        const newItem = {
                            ...prevItems[idx],
                            selected: !prevItems[idx].selected
                        };
                        if (!loading) {
                            changeItemSelection(newItem);
                        }
                        return newItem;
                    } else {
                        if (prevItem.id === "none") {
                            const newItem = {
                                id: "all",
                                name: "Todas",
                                selected: false
                            };
                            return newItem;
                        } else {
                            return prevItem;
                        }
                    }
                });
            });
        }
    };

    const changeItemSelection = item => {
        //New element
        if (item.selected) {
            setFiltered(true);
            const tempArray = selectionArray;
            tempArray.push(item);
            setSelectionArray(tempArray);
            props.selectionChange(tempArray);
            if (tempArray.length === items.length - 1) {
                setTitle(props.title + " - Todas");
            } else {
                setTitle(props.title + " - " + tempArray.length);
            }
        }
        //Remove element
        else {
            if (selectionArray.length - 1 === 0) {
                setTitle(props.title);
                setFiltered(false);
                setSelectionArray([]);
                props.selectionChange([]);
            } else {
                setTitle(props.title + " - " + (selectionArray.length - 1));
                const tempArray = [...selectionArray];
                tempArray.map((prevItem, idx) => {
                    if (prevItem.id === item.id) {
                        tempArray.splice(idx, 1);
                        setSelectionArray(tempArray);
                        props.selectionChange(tempArray);
                    }
                });
            }
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
                                            onChange={() =>
                                                optionSelected(item)
                                            }
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

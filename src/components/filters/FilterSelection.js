import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

import FilterCustom from "./FilterCustom";
import SearchBar from "../basics/input/SearchBar";
import CheckBox from "../basics/CheckBox";

const fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"]
};

const NestedButton = props => {
    // TODO: this styles wont be needed when inline svg element dissappears
    const styles = {
        nestedButton: {
            width: 12,
            height: 12,
            marginLeft: 8,
            verticalAlign: "middle",
            ...props.style
        },
        nestedButtonRotated: {
            width: 12,
            height: 12,
            marginLeft: 8,
            verticalAlign: "middle",
            transform: "rotate(90deg)",
            ...props.style
        }
    };

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={
                props.collapsed
                    ? styles.nestedButton
                    : styles.nestedButtonRotated
            }
        >
            <defs>
                <path
                    id="nestedA"
                    d="M9 4c.256 0 .512.098.707.293l7 7a.999.999 0 0 1 0 1.415l-7.071 7.07a.999.999 0 1 1-1.414-1.413L14.586 12 8.293 5.708A.999.999 0 0 1 9 4"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="nestedB" fill="#fff">
                    <use xlinkHref="#nestedA" />
                </mask>
                <g fill="#b0b0b0" mask="url(#nestedB)">
                    <path d="M0 0h24v24H0z" />
                </g>
            </g>
        </svg>
    );
};

const FilterSelection = props => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(props.title);
    const [selectionArray, setSelectionArray] = useState(
        props.singleSelection
            ? null
            : props.prevSelection
            ? props.prevSelection
            : []
    );
    const [selection, setSelection] = useState(
        props.singleSelection ? props.prevSelection : null
    );
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsIsArr, setItemsIsArr] = useState(true);

    // TODO: this styles wont be needed when inline svg element dissappears
    const styles = {
        nestedTitle: {
            cursor: "pointer",
            verticalAlign: "middle",
            ...props.style
        },
        nestedList: {
            marginTop: 8,
            ...props.style
        }
    };

    useEffect(() => {
        const keys = Object.keys(props.items).filter(
            key => props.items[key].parent
        );
        if (keys.length > 0) setItemsIsArr(false);
        else setItemsIsArr(true);

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
                    // for nested objects
                    if (item.items) {
                        const nested = item.items.map(innerItem => {
                            let innerTemp = {
                                ...innerItem,
                                selected: true
                            };
                            if (idx === 0) {
                                innerTemp.id = "none";
                                innerTemp.name = "Ninguna";
                            } else {
                                tempArray.push(innerTemp);
                            }
                            return innerTemp;
                        });
                        let allTemp = {
                            ...item,
                            items: nested,
                            collapsed: false
                        };
                        return allTemp;
                    }
                    // for regular objects
                    else {
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
                    }
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
                    // for nested objects
                    if (item.items) {
                        const nested = item.items.map(innerItem => {
                            let innerTemp = {
                                ...innerItem,
                                selected: false
                            };
                            if (idx === 0) {
                                innerTemp.id = "all";
                                innerTemp.name = "Todas";
                            }
                            return innerTemp;
                        });
                        let allTemp = {
                            ...item,
                            items: nested,
                            collapsed: false
                        };
                        return allTemp;
                    }
                    // for regular objects
                    else {
                        let noneTemp = {
                            ...item,
                            selected: false
                        };
                        if (idx === 0) {
                            noneTemp.id = "all";
                            noneTemp.name = "Todas";
                        }
                        return noneTemp;
                    }
                });
            });
        } else {
            if (props.singleSelection) {
                if (loading || item !== selection) {
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
                        // for regular objects
                        if (itemsIsArr) {
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
                        }
                        // for nested objects
                        else {
                            // repeat it once
                            if (idx === 0) item.selected = !item.selected;
                            if (prevItem.parent === item.parent) {
                                changeItemSelection(item);
                                if (
                                    prevItem.id === "all" ||
                                    prevItem.id === "none"
                                )
                                    return prevItem;
                                else return item;
                            } else return prevItem;
                        }
                    });
                });
            }
        }
    };

    const changeItemSelection = item => {
        // new element
        if (item.selected) {
            setFiltered(true);
            let tempArray = selectionArray;
            tempArray.push(item);
            tempArray = getUnique(tempArray, "id");
            setSelectionArray(tempArray);
            props.selectionChange(tempArray);
            // for regular objects
            if (itemsIsArr) {
                if (tempArray.length === items.length - 1)
                    setTitle(props.title + " - Todas");
                else setTitle(props.title + " - " + tempArray.length);
            }
            // for nested objects
            else {
                const elems = items.map(inner =>
                    inner.items && inner.items.length > 0
                        ? inner.items.length
                        : 0
                );
                const count = elems.reduce(
                    (accumulator, currentVal) => accumulator + currentVal,
                    0
                );
                if (tempArray.length === count - 1)
                    setTitle(props.title + " - Todas");
                else setTitle(props.title + " - " + tempArray.length);
            }
        }
        // remove element
        else {
            if (selectionArray.length - 1 === 0) {
                setTitle(props.title);
                setFiltered(false);
                setSelectionArray([]);
                props.selectionChange([]);
            } else {
                setTitle(props.title + " - " + (selectionArray.length - 1));
                const tempArray = selectionArray.filter(
                    prevItem => prevItem.id !== item.id
                );
                setSelectionArray(tempArray);
                props.selectionChange(tempArray);
            }
        }
    };

    const toggleItems = item => {
        item.collapsed = !item.collapsed;
        setItems(prevItems => {
            return prevItems.map(pItem => {
                if ("collapsed" in pItem) {
                    if (pItem.parent === item.parent) return item;
                    else return pItem;
                } else return pItem;
            });
        });
    };

    const getUnique = (arr, comp) => {
        const unique = arr
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])
            .map(e => arr[e]);

        return unique;
    };

    const renderMenu = () => {
        const fuse = new Fuse(items, fuseOptions);
        const data = query ? fuse.search(query) : items;
        return (
            <div className="items-filter">
                <SearchBar
                    style={{ height: 36, width: 180, marginBottom: 16 }}
                    styleinput={{ height: 36 }}
                    placeholder={"Filtrar"}
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="options">
                    {data.map(item => {
                        return (
                            <CheckBox
                                key={`${item.name}-${item.id}`}
                                style={{ marginTop: 8 }}
                                title={item.name}
                                onClick={() => optionSelected(item)}
                                selected={item.selected}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    // TODO: fix the svg element, it should be a checkbox
    const renderNestedMenu = () => {
        const data = items.map(item => {
            if (item.parent && query) {
                // fully clone without mutations
                let temp = JSON.parse(JSON.stringify(item));
                const fuse = new Fuse(item.items, fuseOptions);
                temp.items = fuse.search(query);
                temp.collapsed = false;
                return temp;
            } else return item;
        });
        return (
            <div className="items-filter">
                <SearchBar
                    style={{ height: 36, width: 180 }}
                    styleinput={{ height: 36 }}
                    placeholder="Filtrar"
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="options">
                    <ul>
                        {data.map((item, index) => {
                            return item.items ? (
                                <li key={`${item.parent}-${index}`}>
                                    <span
                                        style={styles.nestedTitle}
                                        onClick={() => toggleItems(item)}
                                    >
                                        {item.parent}
                                        <NestedButton
                                            collapsed={item.collapsed}
                                            style={props.style}
                                        />
                                    </span>
                                    {!item.collapsed && (
                                        <ul style={styles.nestedList}>
                                            {item.items.length > 0
                                                ? item.items.map(item => (
                                                    <CheckBox
                                                        key={`${item.name}-${item.id}`}
                                                        style={{ marginTop: 8 }}
                                                        title={item.name}
                                                        onClick={() => optionSelected(item)}
                                                        selected={item.selected}
                                                    />
                                                  ))
                                                : ""}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <CheckBox
                                    key={`${item.name}-${item.id}`}
                                    style={{ marginTop: 8 }}
                                    title={item.name}
                                    onClick={() => optionSelected(item)}
                                    selected={item.selected}
                                />
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
            onBlur={() => {
                if (props.onBlur && props.singleSelection)
                    props.onBlur(selection);
                else if (props.onBlur) props.onBlur(selectionArray);
            }}
        >
            {itemsIsArr ? renderMenu() : renderNestedMenu()}
        </FilterCustom>
    );
};

export default FilterSelection;

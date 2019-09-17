import React, { useState, useEffect } from "react";
import Jobin from "jobin-client";
import { levelArr } from "../../constants/levels";
import { optionsArray } from "../../constants/moreOptionsJober";

import MainModal from './MainModal'
import SearchBar from '../SearchBar'
import JoberCell from '../search/detail/infoColumn/JoberCell'
import FilterMultipleSelection from '../filter/FilterMultipleSelection'
import FilterDate from '../filter/FilterDate'
import FilterSlider from '../filter/FilterSlider'
import FilterSingleSelection from '../filter/FilterSingleSelection'

const SelectJoberModal = props => {
	const style = {
		searchContainer:{
			paddingBottom: 8,
			marginBottom: 16,
			borderBottom: '1px solid var(--soft-grey)'
		},
		searchBar:{
			marginTop: 16,
			marginBottom: 8
		},
	}

	const [jobersArray, setJobersArray] = useState([]);
	const [jobersPredefinedArray, setJobersPredefinedArray] = useState([]);
	const [leadPrice, setLeadPrice] = useState(null);
	const [searching, setSearching] = useState(false);
	const [level, setLevel] = useState(()=>{
		if(props.job){
			const level = props.job.get("Level");
			switch (level){
				case 1:
					return [{id: "1", name: "Bronce", selected: true}, {id: "2", name: "Plata", selected: true}, {id: "3", name: "Oro", selected: true}];
				case 2:
					return [{id: "2", name: "Plata", selected: true}, {id: "3", name: "Oro", selected: true}];
				case 3:
					return [{id: "3", name: "Oro", selected: true}];
				default:
					return [{id: "1", name: "Bronce", selected: true}, {id: "2", name: "Plata", selected: true}, {id: "3", name: "Oro", selected: true}];
			}
		}
		else{
			return [{id: "1", name: "Bronce", selected: true}, {id: "2", name: "Plata", selected: true}, {id: "3", name: "Oro", selected: true}];
		}
	});
	const [levelArray, setLevelArray] = useState(()=>{
		if(props.job){
			const level = props.job.get("Level");
			switch (level){
				case 1:
					return [1, 2, 3];
				case 2:
					return [2, 3];
				case 2:
					return [3];
				default:
					return [1, 2, 3];
			}
		}
		else{
			return [1, 2, 3];
		}
	});
	const [distance, setDistance] = useState(50);
	const [points, setPoints] = useState(4);
	const [leads, setLeads] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [option, setOption] = useState(() =>{
		if(props.job){
			const jobType = props.job.get("JobType");
			return({
				id: jobType === "lead" ? "search" : "predefined",
				name: jobType === "lead" ? "Busqueda" : "Predefinidos",
				selected: true
			})
		}
		else{
			return({
				id: "search",
				name: "Busqueda",
				selected: true
			})
		}
	});
	const [searchText, setSearchText] = useState(null);

	useEffect(() => {
		async function getLeadPrice(){
			const result = await Jobin.Job.getPrice(props.job);
			if(result.status === 'ok'){
				searchJober(levelArray, distance, points, result.result, startDate, endDate, searchText);
				setLeadPrice(result.result);
				setLeads(result.result);
			}
		}
		if(props.job){
			const jobType = props.job.get("JobType");
			if(jobType === "lead"){
				getLeadPrice();
			}
		}
    }, []);

    const searchJober = async (
        levelArray,
        distance,
        points,
        leads,
        startDate,
        endDate,
        text
    ) => {
        setSearching(true);
        const result = await Jobin.Jober.search(
            levelArray,
            distance,
            props.job ? props.job.get("Location") : null,
            points,
            leads,
            startDate ? new Date(startDate) : null,
            endDate ? new Date(endDate) : null,
            text,
            6
        );
        if (result.status === "ok") {
            setJobersArray(result.result);
        }
        setSearching(false);
    };

    const getPredefinedJobersForJob = async () => {
        setSearching(true);
        const result = await Jobin.Job.getPredefinedJobersForJob(props.job);
        if (result.status === "ok" && result.result) {
            const tempArray = [];
            for (let i = 0; i < result.result.length; i++) {
                const joberId = result.result[i];
                const joberResult = await Jobin.Jober.getJoberById(joberId);
                if (joberResult.status === "ok" && joberResult.result) {
                    tempArray.push(joberResult.result);
                }
            }
            setJobersArray(tempArray);
            setJobersPredefinedArray(tempArray);
        }
        setSearching(false);
    };

    const selectJober = async jober => {
        const jobType = props.job.get("JobType");
        if (jobType === "lead") {
            const joberLeads = jober.get("nJobs");
            const subscription = jober.get("UserSubscription");
            if (joberLeads >= leadPrice || subscription) {
                props.asignJober(jober);
            } else {
                alert(
                    "Este Jober no tiene suscripción activo o suficientes créditos para aceptar este trabajo."
                );
            }
        } else {
            setJobersArray(jobersPredefinedArray);
            props.asignJober(jober);
        }
    };

	const renderSearchBar = () =>{
		return(
			<div style={style.searchContainer}>
				<SearchBar
					placeholder={"Buscar por número"}
					style={style.searchBar}
					onChange={(e) => {
						setSearchText(e.target.value);
						if(e.target.value.length > 0)
							searchJober(levelArray, distance, points, leads, startDate, endDate, e.target.value);
						else
							setJobersArray(jobersPredefinedArray);
					}}
				/>
				<div>
					<FilterMultipleSelection
						type="level"
						title="Nivel"
						items={levelArr}
						prevSelection={level}
						selectionChange={(selection) => {
							setLevel(selection);
							const tempArray = [];
							for(let i=0; i<selection.length; i++){
								const tempLevel = selection[i];
								if(tempLevel.id === "all"){
									tempArray = [1, 2, 3];
									break;
								}
								else{
									tempArray.push(Number(tempLevel.id));
								}
							}
							setLevelArray(tempArray);
							searchJober(tempArray, distance, points, leads, startDate, endDate, searchText);
						}}
					/>
					<FilterSlider
						style={{marginLeft: 4}}
						type="distance"
						title="Dist"
						minValue={5}
						maxValue={75}
						value={distance}
						unit="Km"
						onBlur={(distance) => {
							setDistance(distance)
							searchJober(levelArray, distance, points, leads, startDate, endDate, searchText);
						}}
					/>
					<FilterSlider
						style={{marginLeft: 4}}
						type="points"
						title="Pun"
						minValue={0}
						maxValue={5}
						value={points}
						onBlur={(points) => {
							setPoints(Number(points));
							searchJober(levelArray, distance, Number(points), leads, startDate, endDate, searchText);
						}}
					/>
					{props.job && (props.job.get("JobType") === "lead" || props.job.get("JobType") === "bid") &&
						<FilterSlider
							style={{marginLeft: 4}}
							type="leads"
							title="Leads"
							minValue={0}
							maxValue={50}
							unit="€"
							value={leads}
							onBlur={(leads) => {
								setLeads(Number(leads));
								searchJober(levelArray, distance, points, Number(leads), startDate, endDate, searchText);
							}}
						/>
					}
					<FilterDate
						style={{marginLeft: 4}}
						type="date"
						title="Últ. conex."
						selectionChange={(date) => {
							setStartDate(date.startDate);
							setEndDate(date.endDate);
							searchJober(levelArray, distance, points, leads, date.startDate, date.endDate, searchText);
						}}
					/>
					<FilterSingleSelection
						style={{marginLeft: 4}}
						type="more"
						title="Más"
						prevSelection={option}
						items={optionsArray}
						selectionChange={(option) => {
							setOption(option);
							if(option.id === 'search'){
								searchJober(levelArray, distance, points, leads, startDate, endDate, searchText);
							}
							else{
								getPredefinedJobersForJob();
							}
						}}
					/>
				</div>
			</div>
		)
	}

    return (
		<MainModal
			style={{minHeight: 680}}
			title={"Selección de Jobers"}
			subtitle={"Escoge al Jober que realizará esta solicitud"}
			isVisible={props.isVisible}
			onClose={props.onClose}
		>
			<div>
				{renderSearchBar()}
				{searching ?
					<label>Buscando...</label>
				: 
					jobersArray.length > 0 ?
						jobersArray.map((item, index) => {
							const subscription = item.get("UserSubscription");
							return (
								<JoberCell
									key={"jober"+index}
									jober={item}
									onClick={() => selectJober(item)}
									buttonText={leadPrice ? "Precio "+(subscription ? 0 : leadPrice)+" €" : "Seleccionar"}
								/>
							)
						})
					:
						<div>
							{option.id === "search" ?
								<label>No hay ningún Jober que coincida con tu búsqueda</label>
							:
								<label>No hay ningún Jober predeterminado</label>
							}
						</div>
				}
			</div>
        </MainModal>
    )
}

export default SelectJoberModal;

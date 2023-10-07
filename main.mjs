try {
	const vg_1 = "bank_branches_per_capita.vg.json"; 
	const chart1 = await vegaEmbed("#chart1", vg_1); 
	const vg_2 = "bank_deposits_states.vg.json"; 
	const chart2 = await vegaEmbed("#chart2", vg_2); 
} catch (e) {
	console.error(e); 
}

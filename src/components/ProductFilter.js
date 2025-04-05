
export function ProductFilter({filter, handleFilter}){
    
    return (<div>
        <span>Price </span>
        Min <input type="number" defaultValue={filter.price.min} min={0} onChange={(event)=> handleFilter('min',event.target.value)}/>
        Max <input type="number" defaultValue={filter.price.max} max={999} onChange={(event)=> handleFilter('max',event.target.value)}/>        
    </div>)
}
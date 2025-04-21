import React from 'react'

const Card = () => {
    return (
        <div className="flex items-center gap-5">
            <div className="w-32 h-24 bg-slate-100 rounded-lg" />

            <div>
                <h3 className="bg-slate-100 w-[150px] h-4" />
                <p  className="bg-slate-100 w-[100px] h-4 mt-3"/>
            </div>
        </div>
    )
}

const SuggestionShimmerUI = () => {
  return (
    <div className="flex flex-col gap-3 mt-8 px-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default SuggestionShimmerUI

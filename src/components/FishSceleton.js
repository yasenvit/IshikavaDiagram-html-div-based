import React, { Component } from 'react'

function fishScale (itemsQty, H) {
  let W = H*1.8
  let F =`${((H-20)/(itemsQty*4+6))}`
  return (
  {
  fishPan : {
    display: 'flex',
    flexDirection:'row',
    backgroundColor: '#FDF9ED',
    height: `${H}px`,
    width: `${W}px`,
    fontSize: `0.7rem`,
    padding: '10px',
    border: '1px solid  rgb(240, 240, 240)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    verticalAlign: 'middle',
    textAlign: 'center',
    border:"0.9px solid lightseagreen",
    textAlign: 'center',
    fontSize: '14px',
    padding: '2px',
    paddingBottom: '3px',
    color: 'lightseagreen'
  },
	site: {	
	  display: 'flex',	
	  flexDirection: 'row',	
	  height: `${(H-20)/(itemsQty*4+6)}px`,
	},
	siteHeader: {	
	  display: 'flex',	
	  flexDirection: 'row',	
	  height: `${(H-20)/(itemsQty*4+6)*2}px`,
	},
	siteItem: {	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)}px`,
	},	
	boneTop: {	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)}px`,
	  textDecoration: 'underline',	
	  background: 'linear-gradient(to top right, #FDF9ED calc(50% - 1px), #aaa, #FDF9ED calc(50% + 1px))'	
	},
	boneTopFilled: {
    color: 'rgb(55, 55, 148)',	
	  fontWeight: '600',	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)}px`,
  },
  topHeaderText: {
    textDecoration: 'underline',	
    whiteSpace: 'nowrap',
    paddingBottom: '0px',
    margin: '0px',
    position: 'relative',
    bottom: `${40/((H-20)/(itemsQty*4+6))}px`	
  }	,
  bottomHeaderText: {
    textDecoration: 'underline',	
    whiteSpace: 'nowrap',
    paddingBottom: '0px',
    margin: '0px',
    position: 'relative',
    bottom: `${10/((H-20)/(itemsQty*4+6))}px`	
  }	,
  topText: {
    whiteSpace: 'nowrap',
    paddingBottom: '0px',
    margin: '0px',
    position: 'relative',
    bottom: '2px'	
  }	,
  bottomText: {
    whiteSpace: 'nowrap',
    paddingBottom: '0px',
    margin: '0px',
    position: 'relative',
    bottom: '2px'	
  }	,
	boneBottom: {	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)}px`,
	  textDecoration: 'underline',	
	  background: 'linear-gradient(to top left, #FDF9ED calc(50% - 1px), #aaa, #FDF9ED calc(50% + 1px))'	
	},	
	boneBottomFilled: {	
	  color: 'rgb(55, 55, 148)',	
	  fontWeight: '600',	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)}px`,
	  whiteSpace: 'nowrap'
  },
  siteItemBottomLast: {	
    width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
    height: `${(H-20)/(itemsQty*4+6)}px`,
	  borderTop: '1px solid #aaa',	
	},
  siteItemTopLast: {	
    width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
    height: `${(H-20)/(itemsQty*4+6)}px`,
	  borderBottom: '1px solid #aaa',	
	},
	header: {	
	  width: `${(H-20)/(itemsQty*4+6)*0.8}px`,
	  height: `${(H-20)/(itemsQty*4+6)*2}px`,
	  fontSize: '1rem',	
    color: 'lightseagreen',
  }	
}	)}	

let fishDataSample = [
  {
    parent: "Bone_1",
    children: [
      {name: "Bone_1-1"},
      {name: "Bone_1-2"},
      {name: "Bone_1-3"}
    ]
  },
  {
    parent: "Bone_2",
    children: [
      {name: "Bone_2-1"},
      {name: "Bone_2-2"},
      {name: "Bone_2-3"},
      {name: "Bone_2-4"}
    ]
  },
  { 
    parent: "Bone_3",
    children: [
      {name: "Bone_3-1"},
      {name: "Bone_3-2"},
    ]
  },
  {
    parent: "Bone_4",
    children: [
      {name: "Bone_4-1"},
      {name: "Bone_4-2"},
      {name: "Bone_4-3"},
      {name: "Bone_4-4"},
      {name: "Bone_4-5"}
    ]
  },
  {
    parent: "Bone_5",
    children: [
      {name: "Bone_5-1"},
      {name: "Bone_5-2"},
      {name: "Bone_5-3"}
    ]
  },
  {
    parent: "Bone_6",
    children: [
      {name: "Bone_6-1"},
      {name: "Bone_6-2"},
      {name: "Bone_6-3"}
    ]
  },
  {
    parent: "Bone_7",
    children: [
      {name: "Bone_7-1"},
      {name: "Bone_7-2"},
      {name: "Bone_7-3"},
      {name: "Bone_7-4"},
      {name: "Bone_7-5"},
      {name: "Bone_7-6"},
      {name: "Bone_7-7"},
      {name: "Bone_7-8"},
      {name: "Bone_7-9"},
      {name: "Bone_7-10"},
      {name: "Bone_7-11"},
      {name: "Bone_7-12"},
      {name: "Bone_7-13"},
      {name: "Bone_7-14"},
      {name: "Bone_7-15"},
      {name: "Bone_7-16"},
      {name: "Bone_7-17"},
      {name: "Bone_7-18"},
    ]
  },
  {
    parent: "Bone_8",
    children: [
      {name: "Bone_8-1"},
      {name: "Bone_8-2"},
      {name: "Bone_8-3"},
      {name: "Bone_8-4"},
      {name: "Bone_8-5"},
      {name: "Bone_8-6"}
    ]
  },
  {
    parent: "Bone_9",
    children: [
      {name: "Bone_9-1"},
    ]
  },
  {
    parent: "Bone_10",
    children: [
      {name: "Bone_10-1"},
      {name: "Bone_10-2"},
      {name: "Bone_10-3"}
    ]
  },
]

export default class FishSceleton extends Component {
  state = {
    topic : 'Problem or Goal',
    fishData: fishDataSample
  }

  getStepLength =(length,qty) => {
    let stepLengthLength = Math.floor(length/qty)
    return stepLengthLength
  }

  getTopRowItems = (rownumber,bonelength,topLast,data,style) => {
    let bonesQty = data.length
    let topRowItems = [];
    for (let i=0; i < rownumber; i++) {
      topRowItems.push(<div style={topLast===true?style.siteItemTopLast:style.siteItem}></div>)
    }
    for(let b=0; b<bonesQty; b++){
      let stepLength = this.getStepLength(bonelength, data[b].children.length+1)
      if(rownumber===0){
        topRowItems.push(<div style={style.header}><p style={style.topHeaderText}>{data[b].parent}</p></div>)
      } else if((rownumber-stepLength)%stepLength===0 && (rownumber-stepLength)/stepLength<data[b].children.length){
        topRowItems.push(
          <div style={style.boneTopFilled}>
            <p style={style.topText}>{data[b].children[(rownumber-stepLength)/stepLength].name}</p>
          </div>
        )
      } else {
        topRowItems.push(<div style={style.boneTop}></div>)
      }
      for (let i=0; i < bonelength/1.8; i++) {
        topRowItems.push(<div style={topLast===true?style.siteItemTopLast:style.siteItem}></div>)
      }
    }
    return topRowItems
  }
 
  getTopBones = (bonelength,data, style) => {
    let topRows = [];
    for (let i=0; i < bonelength; i++) {
      let topLast = i+1===bonelength?true:false
      topRows.push(
        <div style={i===0?style.siteHeader:style.site}>
          {this.getTopRowItems(i,bonelength,topLast,data,style)}         
        </div>
      )
    }
    return topRows
  }

  getBottomRowItems = (rownumber, bonelength, bottomLast, data, style) => {
    let bonesQty = data.length
    let bottomRowItems = [];
    for (let i=0; i < rownumber; i++) {
      bottomRowItems.push(<div style={bottomLast===true?style.siteItemBottomLast:style.siteItem}></div>)
    }
    for(let b=0; b<bonesQty; b++){
      let stepLength = this.getStepLength(bonelength, data[b].children.length+1)
      if(rownumber===0){
        bottomRowItems.push(<div style={style.header}><p style={style.bottomHeaderText}>{data[b].parent}</p></div>)
      } else if((rownumber-stepLength)%stepLength===0 && (rownumber-stepLength)/stepLength<data[b].children.length){
        bottomRowItems.push(
          <div style={style.boneBottomFilled}>
            <p style={style.bottomText}>{data[b].children[(rownumber-stepLength)/stepLength].name}</p>
          </div>
        )
      } else {
        bottomRowItems.push(<div style={style.boneBottom}></div>)
      }
      for (let i=0; i < bonelength/1.8; i++) {
        bottomRowItems.push(<div style={bottomLast===true?style.siteItemBottomLast:style.siteItem}></div>)
      }
    }
    return bottomRowItems
  }
  
  getBottomBones = (bonelength, data, style) => {
    let bottomRows = [];
    for (let i=0; i < bonelength; i++) {
      let bottomLast = i+1===bonelength?true:false
      bottomRows.push(
        <div style={i===0?style.siteHeader:style.site}>
          {this.getBottomRowItems(i,bonelength,bottomLast,data,style)}         
        </div>
      )
    }
    return bottomRows
  }

  getfishScale = (itemsQty)=> {
    let scale = itemsQty<=6?fishScale(itemsQty,400):itemsQty<=12?fishScale(itemsQty,450):fishScale(itemsQty, 550)
    return scale
  } 
  render() {
    let fishDataTop = []
    let fishDataBottom = []
    let maxItems = 0
    let lengthBone
    let fishStyle
    if(this.state.fishData) {
      this.state.fishData.map((item, index) => (
        index%2===0?fishDataTop.push(item):fishDataBottom.push(item),
        item.children.length>maxItems?maxItems=item.children.length:null
      ))
      lengthBone = maxItems*2+3
      fishStyle = this.getfishScale(maxItems)
    }
    return (
      <div style={fishStyle.fishPan}>
        <div>
          <div>
            {this.getTopBones(lengthBone,fishDataTop,fishStyle)}
          </div>
          <div>
            {this.getBottomBones(lengthBone,fishDataBottom,fishStyle).reverse()}
          </div>
        </div>
          <div style={fishStyle.title}>
            {this.state.topic}
          </div>
        </div>
    )
  }
}
/**
 * 
 * @param state default 0
 * 0 = street
 * 1 = bar
 * 2 = roadmap
 * 3 = mint
 */
export default function reducer (state= {'tab': 0}, action: any) {
  switch(action.type) {
    case "street": 
    return {
      'tab': 0
    }
    case "bar":
      return {
        'tab': 1
      }
    case "roadmap":
      return {
        'tab': 2
      }
    case "mint":
      return {
        'tab': 3
      }
    default:
      return {
        'tab': 0
      }
  }
}
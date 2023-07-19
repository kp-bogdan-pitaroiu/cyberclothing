import * as React from "react"
import Dashboard from '@/components/Dashboard'
import BasicTable from '@/components/tabel2'
import styles from "@/styles/Backend.module.css"
import SubcategoryPopup from "@/components/popupbutton"


//  Task 1: Create Produts Tabel Catalin
//  https://react.pixelstrap.com/multikart-admin/products/physical/sub-category
//  https://mui.com/material-ui/react-table/ use MUI
//  Add button, https://mui.com/material-ui/react-dialog that opens a dialog upon onClikcEvent

export default function Backend() {
  return (
    
    
<div className={styles.main}>
      
      <Dashboard />
  <div className={styles.pages}>
      <SubcategoryPopup variant="table"/>
    <div>
      <BasicTable />
    </div>
  </div>
      
</div>
  )
}



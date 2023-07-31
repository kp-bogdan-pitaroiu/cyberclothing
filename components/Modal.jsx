import React from 'react'
import "./Modal.module.css";
import styles from "@/styles/Table.module.css";

export const Modal =({closeModal}) => {
    return (
        <div className={styles.modala} onClick={closeModal}>
            <div className={styles.modal}>
                <form>
                    <div className={styles.form-groups}>
                      <lable htmlFor="Product_name">Product_name</lable>
                      <input name="Product_name" />
                    </div>
                    <div className={styles.form-groups}>
                      <lable htmlFor="price">Price</lable>
                      <textarea name="price" />
                    </div>
                    <div className={styles.form-groups}>
                      <lable htmlFor="Status">Status</lable>
                      <select name="Status">
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Gray">Gray</option>
                      </select>
                    </div>
                    <div>
                      <lable htmlFor="Category">Category</lable>
                      <textarea name="Category" />
                    </div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
    )
}
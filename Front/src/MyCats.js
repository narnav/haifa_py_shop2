import React, { useEffect } from 'react'
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectcats, getcatsAsync } from './app/catSlice'

const MyCats = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectcats);

  useEffect(() => {
    dispatch(getcatsAsync())
    
  }, [])

  return (
    <div style={{ backgroundColor: "pink" }}>MyCats
      {categories.map((cat) => (
        <NavLink key={cat._id} to={`/categories/${cat._id}`}>
          {cat.desc}| {" "}
        </NavLink>
      ))}
       <NavLink key={0} to={`/categories/${0}`}>
          Allllllll
        </NavLink>
      <Outlet></Outlet>
    </div>
  )
}

export default MyCats
import React, { useState } from 'react'
import { Input } from 'antd';

// const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div>
            <Input
                style={{marginTop:'5px'}}
                size="large"
                value={SearchTerms}
                
                onChange={onChangeSearch}
                placeholder="Search By City and Make"
            />
        </div>
    )
}

export default SearchFeature


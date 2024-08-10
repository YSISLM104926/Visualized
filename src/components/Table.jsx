import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Spin, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useDeleteDataMutation, useGetDataQuery, useUpdateDataMutation } from '../redux/api/baseApi';
import { useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'sonner';

const TableApp = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const { data, isLoading } = useGetDataQuery();
  const [deleteData] = useDeleteDataMutation();
  //
  const keys_to_extract = ["_id", "title", "sector", "topic", "impact", "relevance", "intensity", "actions"]

  const result = data?.map(d => {
    let extracted = {};
    keys_to_extract.forEach(key => {
      extracted[key] = d[key];
    });
    return extracted;
  });

  /*
    backend MVC
  */
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    console.log(id);
    if (id) {
      try {
        const res = await deleteData(id);
        console.log('Deleted:', res);
        toast.success(`${id} deleted successfully`);
        // navigate(0);
      } catch (err) {
        console.error('Failed to delete the item:', err);
      }
    } else {
      console.error('Invalid ID:', id);
    }
  };
  const handleUpdate = async (id) => {
    navigate(`/dashboard/update-data/${id}`);
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  if (isLoading) {
    return <p></p>;
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 12,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
      width: '20%',
      ...getColumnSearchProps('sector'),
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
      ...getColumnSearchProps('topic'),
      sorter: (a, b) => a.topic.length - b.topic.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Relevance',
      dataIndex: 'relevance',
      key: 'topic',
      ...getColumnSearchProps('relevance'),
      sorter: (a, b) => a.topic.length - b.topic.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Intensity',
      dataIndex: 'intensity',
      key: 'intensity',
      ...getColumnSearchProps('intensity'),
      sorter: (a, b) => a.topic.length - b.topic.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
          <Button type="primary" success onClick={() => handleUpdate(record._id)}>
            Update
          </Button>
        </Space>
      ),
    },
  ];
  return (
    < div >
      <h1 className='text-start text-3xl mt-12 font-bold ms-4'>Table Results</h1>
      <Table columns={columns} dataSource={result} scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 5,
          pageSizeOptions: [1, 2, 3, 4, 5, 10, 20], // Options for the user to choose from
          showSizeChanger: true, // Allows user to change page size
        }}
      />
    </div >
  );
};

export default TableApp;
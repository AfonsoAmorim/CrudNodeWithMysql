const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
    return global.conexao
    const mysql=require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:@localhost:3306/node")
    console.log('Conectou ao banco')
    global.conexao=con
    return con;
}


const todosClientes = async()=>{
    const con=await conectar()
    const [linhas] = await con.query('SELECT * FROM clientesnode')
    return await linhas
}

const inserirCliente = async(cliente)=>{
    const con=await conectar()
    const sql='INSERT INTO clientesnode (nome_cliente,idade) VALUES (?,?)'
    const valores=[cliente.nome_cliente,cliente.idade]
    await con.query(sql,valores)

}

const atualizaCliente = async(id,cliente)=>{
    const con=await conectar()
    const sql='UPDATE  clientesnode SET nome_cliente=?,idade=? WHERE id_cliente=? '
    const valores=[cliente.nome_cliente,cliente.idade,id]
    await con.query(sql,valores)

}


const deletarCliente = async(id)=>{
    const con=await conectar()
    const sql='DELETE FROM  clientesnode WHERE id_cliente=?;'
    const valores=[id]
    await con.query(sql,valores)

}






module.exports = {todosClientes, inserirCliente, atualizaCliente, deletarCliente}
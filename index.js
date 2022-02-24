(async ()=>{
    const db=require('./db')


    /*    console.log('Inserir novo cliente')
    const nom="Silva Gomes"
    const idad=120
    await db.inserirCliente({nome_cliente:nom,idade:idad})
    */

    
   /*
    const id=4
    const nom="Aline Santos"
    const idad=77
    await db.atualizaCliente(id,{nome_cliente:nom,idade:idad})
    console.log('cliente ' + id + ' atualizado')
  */
    
    
    const id=5
    await db.deletarCliente(id)
    console.log('cliente ' + id + ' deletado')
    

    console.log('Selecionar todos os clientes')
    const clientes=await db.todosClientes()
    console.log(clientes)
})()


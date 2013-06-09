/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.uhsarp.billrive.services;

import com.uhsarp.billrive.dao.GenericDAO;
import com.uhsarp.billrive.domain.Bill;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 *
 * @author uhsarp
 */
@Service("billService")
public class BillService {

    @Resource(name="neo4jDAO")
    GenericDAO genericDAO;
    public List<Bill> getBills(int userId) {
        
        List<Bill> rtnval = new ArrayList<Bill>();
        rtnval=genericDAO.getBills(userId);
        return rtnval;
    }

    public Bill getBillById(String billId_p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public Bill createBill(Bill bill_p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public Bill updateBill(Bill bill_p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public void deleteBill(String billId_p) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public GenericDAO getGenericDAO() {
        return genericDAO;
    }

    public void setGenericDAO(GenericDAO genericDAO) {
        this.genericDAO = genericDAO;
    }
    
    
}

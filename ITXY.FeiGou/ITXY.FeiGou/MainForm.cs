using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net.Sockets;
using System.Net;
using System.Threading;

namespace ITXY.FeiGou
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void btnSend_Click(object sender, EventArgs e)
        {
            send(null);
            this.textMsg.Text = "";
        }

        //线程
        private void lis()
        {
            //接收
            UdpClient uc = new UdpClient(9527);
            while (true)
            {
                IPEndPoint ipep = new IPEndPoint(IPAddress.Any, 0);
                byte[] bmsg = uc.Receive(ref ipep);
                string msg = Encoding.Default.GetString(bmsg);
                string[] msgN = msg.Split('|');
                if (msgN[0] == "PUBLIC")
                {
                    this.textHistory.Text += msgN[2] + ":"  + msgN[1] + "\r\n";
                }
                if (msgN[0] == "INROOM")
                {
                    this.textUser.Text += msgN[1] + "\r\n";
                }
                if (msgN[0] == "OUTROOM")
                {
                    this.textUser.Text = this.textUser.Text.Replace(msgN[1] + "\r\n","");
                }

            } 
        }
        private Thread th;
        private void MainForm_Load(object sender, EventArgs e)
        {
            MainForm.CheckForIllegalCrossThreadCalls = false;
            th = new Thread(new ThreadStart(lis));
            th.IsBackground = true;
            th.Start();
            send("login");
        }
        //发送
        private void send(string m)
        {
            string ip = "255.255.255.255";
            UdpClient uc = new UdpClient();
            string msg="空";
            if (this.textMsg.Text != "")
            {
                msg = "PUBLIC|" + this.textMsg.Text + "|六道";
            }
            if (m == "over")
            {
                msg = "OUTROOM|六道";
            }
            if (m == "login")
            {
                msg = "INROOM|六道";
            }
            if (msg != "空")
            {
                byte[] bmsg = Encoding.Default.GetBytes(msg);
                IPEndPoint ipep = new IPEndPoint(IPAddress.Parse(ip), 9527);
                uc.Send(bmsg, bmsg.Length, ipep);
            }
            
        }

        private void MainForm_FormClosed(object sender, FormClosedEventArgs e)
        {
            th.Abort();
            send("over");
        }
    }
}
